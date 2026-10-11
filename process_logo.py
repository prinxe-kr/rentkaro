import os
from PIL import Image

src_path = r"C:\Users\Prince Kumar\.gemini\antigravity-ide\brain\654f6b3a-1def-452a-b3b7-62e228e03d28\.user_uploaded\media_1791751875337.png"
workspace_dir = r"c:\Users\Prince Kumar\OneDrive\Desktop\rentkaro"
assets_dir = os.path.join(workspace_dir, "assets")
public_dir = os.path.join(workspace_dir, "public")
os.makedirs(assets_dir, exist_ok=True)
os.makedirs(public_dir, exist_ok=True)

img = Image.open(src_path).convert("RGBA")
w, h = img.size

# Function to make the off-white background transparent cleanly
def make_transparent(image, bg_rgb=(248, 247, 242), tolerance=22):
    rgba_data = image.getdata()
    new_data = []
    for item in rgba_data:
        # Check if color is close to background
        diff = max(abs(item[0] - bg_rgb[0]), abs(item[1] - bg_rgb[1]), abs(item[2] - bg_rgb[2]))
        if diff < tolerance:
            # Fully transparent
            new_data.append((item[0], item[1], item[2], 0))
        elif diff < tolerance + 15:
            # Soft antialiased alpha transition
            alpha = int(255 * (diff - tolerance) / 15)
            new_data.append((item[0], item[1], item[2], alpha))
        else:
            new_data.append(item)
    res = Image.new("RGBA", image.size)
    res.putdata(new_data)
    return res

# 1. Full cropped logo
pad = 20
min_x, min_y, max_x, max_y = 344, 114, 679, 437
crop_box = (
    max(0, min_x - pad),
    max(0, min_y - pad),
    min(w, max_x + pad),
    min(h, max_y + pad)
)

logo_cropped = img.crop(crop_box)
logo_cropped.save(os.path.join(assets_dir, "logo.png"), "PNG")
logo_transparent = make_transparent(logo_cropped)
logo_transparent.save(os.path.join(assets_dir, "logo-transparent.png"), "PNG")

# 2. Circular emblem crop (symbol)
gap_y = 334
emblem_box = (min_x - 5, min_y - 5, max_x + 5, gap_y + 5)
emblem_cropped = img.crop(emblem_box)
emblem_trans = make_transparent(emblem_cropped)

# Make square with transparent padding
ew, eh = emblem_trans.size
side = max(ew, eh)
square_symbol = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square_symbol.paste(emblem_trans, ((side - ew) // 2, (side - eh) // 2))

square_symbol.save(os.path.join(assets_dir, "logo-symbol.png"), "PNG")

# Generate crisp favicon icons at multiple standard sizes (16, 32, 48, 64, 128, 256)
fav_32 = square_symbol.resize((32, 32), Image.Resampling.LANCZOS)
fav_64 = square_symbol.resize((64, 64), Image.Resampling.LANCZOS)
fav_128 = square_symbol.resize((128, 128), Image.Resampling.LANCZOS)

# Save to assets, public, and root
for folder in [assets_dir, public_dir, workspace_dir]:
    fav_64.save(os.path.join(folder, "favicon.png"), "PNG")
    fav_32.save(os.path.join(folder, "favicon.ico"), "ICO")
    fav_128.save(os.path.join(folder, "apple-touch-icon.png"), "PNG")

print("Generated all favicon and logo assets successfully!")
