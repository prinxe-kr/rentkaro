from PIL import Image
import os

workspace_dir = r"c:\Users\Prince Kumar\OneDrive\Desktop\rentkaro"
assets_dir = os.path.join(workspace_dir, "assets")

logo_trans = Image.open(os.path.join(assets_dir, "logo-transparent.png")).convert("RGBA")
symbol_trans = Image.open(os.path.join(assets_dir, "logo-symbol.png")).convert("RGBA")

def transform_to_dark_mode(img):
    data = img.getdata()
    new_data = []
    
    # Mint target for teal: (45, 212, 191)
    # Slate target for gray text: (160, 178, 175)
    # Amber stays amber: (245, 158, 11)
    
    for r, g, b, a in data:
        if a < 10:
            new_data.append((r, g, b, 0))
            continue
            
        # Detect amber/yellow (high R, medium-high G, low B: r > 180, g > 120, b < 90)
        is_amber = (r > 160 and g > 110 and b < 90)
        
        # Detect dark teal (g > r and g > b, and r < 80, g < 160, b < 150)
        is_teal = (g > r and b >= r and g < 160 and r < 80)
        
        # Detect dark gray text
        is_gray = (abs(r - g) < 25 and abs(g - b) < 25 and r < 120)
        
        if is_amber:
            # Boost brightness of amber
            new_data.append((min(255, int(r * 1.1)), min(255, int(g * 1.1)), b, a))
        elif is_teal:
            # Shift dark teal to luminous Mint #2DD4BF (45, 212, 191)
            # Calculate intensity factor
            factor = g / 130.0
            new_r = int(45 * factor)
            new_g = int(212 * factor)
            new_b = int(191 * factor)
            new_data.append((new_r, new_g, new_b, a))
        elif is_gray:
            # Shift to bright readable light slate
            new_data.append((180, 195, 192, a))
        else:
            new_data.append((r, g, b, a))
            
    res = Image.new("RGBA", img.size)
    res.putdata(new_data)
    return res

logo_dark = transform_to_dark_mode(logo_trans)
logo_dark.save(os.path.join(assets_dir, "logo-dark.png"), "PNG")

symbol_dark = transform_to_dark_mode(symbol_trans)
symbol_dark.save(os.path.join(assets_dir, "logo-symbol-dark.png"), "PNG")

print("Created logo-dark.png and logo-symbol-dark.png successfully!")
