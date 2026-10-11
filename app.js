/**
 * RentKaro - Core Application Logic
 * Prototype v1.0 · Patna Peer-to-Peer Rental Marketplace
 * Implements PRD Functional Requirements F1 through F9 & Section 7 Pricing Logic
 */

// =============================================================================
// 1. Initial Curated Dataset (Patna Pilot Seed Data)
// =============================================================================
const INITIAL_ITEMS = [
  {
    id: "item-patna-1",
    name: "Sony Alpha A7 III Full-Frame Camera + 28-70mm OSS Kit",
    category: "cameras",
    condition: "Like New",
    rating: 4.9,
    rentalsCount: 22,
    hourlyPrice: 180,
    dayPrice: 1200,
    deposit: 5000,
    minHours: 3,
    pincode: "800001",
    area: "Boring Road, Near Alankar Jewellers",
    window: "08:00 AM – 09:30 PM",
    instructions: "Handover at Gate 2. Bring original physical Aadhaar or Driving License for verification.",
    rules: "Handle with extreme care. Keep lens cap on when not shooting. Rain protection mandatory. Return with fully charged battery.",
    description: "24.2MP full-frame mirrorless camera with 4K video recording, 693 AF points, 1x 64GB high-speed SD card, battery, and protective carrying bag.",
    ownerName: "Rahul Sharma",
    ownerPhone: "+91 98350 41289",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-2",
    name: "JBL PartyBox 310 Portable Bluetooth Party Speaker (240W)",
    category: "sound",
    condition: "Excellent",
    rating: 4.95,
    rentalsCount: 38,
    hourlyPrice: 140,
    dayPrice: 900,
    deposit: 3000,
    minHours: 3,
    pincode: "800020",
    area: "Kankarbagh, Near Colony More",
    window: "07:00 AM – 10:00 PM",
    instructions: "Pick up at Anand Heights flat 204. Power cord and auxiliary cable provided in box.",
    rules: "Keep away from swimming pool / rain. Do not exceed max volume distortion. Return in original carry carton.",
    description: "Massive 240-watt sound with synchronized dynamic light show, dual mic inputs for karaoke, and wheels for easy transport. Battery runs up to 18 hours.",
    ownerName: "Priya Varma",
    ownerPhone: "+91 94312 87654",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-3",
    name: "Bosch Professional GSB 500W Impact Drill + 100-Pc Tool Kit",
    category: "tools",
    condition: "Excellent",
    rating: 4.8,
    rentalsCount: 19,
    hourlyPrice: 45,
    dayPrice: 280,
    deposit: 1000,
    minHours: 2,
    pincode: "800014",
    area: "Bailey Road, Near Saguna More",
    window: "08:30 AM – 08:00 PM",
    instructions: "Meet near Reliance Trends Saguna More. Bring Government ID.",
    rules: "Wear eye safety glasses. Do not force bits into reinforced RCC columns without proper masonry setting. Clean after use.",
    description: "Powerful 500W forward/reverse impact drill suitable for wood, brick, concrete and metal. Includes 100 accessories (screws, wall plugs, hammer, pliers, wrench, measuring tape).",
    ownerName: "Abhishek Raj",
    ownerPhone: "+91 99341 62980",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-4",
    name: "Quechua 4-Person Waterproof Camping Tent + 2 Sleeping Bags",
    category: "camping",
    condition: "Like New",
    rating: 4.85,
    rentalsCount: 14,
    hourlyPrice: 65,
    dayPrice: 420,
    deposit: 1500,
    minHours: 6,
    pincode: "800016",
    area: "Rajendra Nagar, Near Moin-ul-Haq Stadium",
    window: "08:00 AM – 09:00 PM",
    instructions: "Handover at Park View Society. Quick 5-minute setup demonstration provided on request.",
    rules: "Do not pitch over sharp stones without ground sheet. Strictly no cooking or campfire inside tent. Dry completely before packing.",
    description: "Fresh & Black waterproof 4-person tent that stays cool in sunlight. Comes with collapsible alloy poles, ground pegs, hammer, and two thermal sleeping bags.",
    ownerName: "Vikas Sinha",
    ownerPhone: "+91 97714 55231",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-5",
    name: "Heavy-Duty 16-Foot Multipurpose Aluminium Step Ladder",
    category: "tools",
    condition: "Good",
    rating: 4.75,
    rentalsCount: 26,
    hourlyPrice: 40,
    dayPrice: 220,
    deposit: 800,
    minHours: 2,
    pincode: "800001",
    area: "Fraser Road, Near Dak Bungalow Chowk",
    window: "07:30 AM – 08:30 PM",
    instructions: "Pickup directly from building basement parking. Fits inside larger car boot or auto rickshaw.",
    rules: "Lock safety hinge clicks before climbing. Weight limit 130 kg. Domestic and store use only.",
    description: "Rustproof 16ft foldable ladder configurable as straight extension, A-frame step ladder, or scaffold. Anti-slip rubber feet.",
    ownerName: "Sunil Prasad",
    ownerPhone: "+91 93340 18872",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-6",
    name: "Epson Full HD 3500-Lumens Home & Event Projector + 100\" Screen",
    category: "electronics",
    condition: "Like New",
    rating: 4.9,
    rentalsCount: 31,
    hourlyPrice: 150,
    dayPrice: 950,
    deposit: 3500,
    minHours: 3,
    pincode: "800013",
    area: "Patliputra Colony, Near Roundabout",
    window: "09:00 AM – 10:00 PM",
    instructions: "Handover at Patliputra House 42. HDMI cable and power extension cord included.",
    rules: "Allow fan to cool down 2 minutes before disconnecting power. Do not touch optical lens. Return in padded bag.",
    description: "Crisp 1080p projection ideal for movie nights, World Cup screenings, rooftop parties, or corporate pitch decks. Includes 100-inch foldable tripod screen.",
    ownerName: "Neha Kumari",
    ownerPhone: "+91 98352 19045",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-7",
    name: "DJI Mini 3 Pro 4K HDR Ultralight Drone + RC Smart Controller",
    category: "cameras",
    condition: "Like New",
    rating: 4.98,
    rentalsCount: 17,
    hourlyPrice: 260,
    dayPrice: 1650,
    deposit: 8000,
    minHours: 3,
    pincode: "800002",
    area: "Anisabad, Near Golamber",
    window: "07:00 AM – 07:00 PM",
    instructions: "Meet in person. Drone flight check will be done together before and after return.",
    rules: "Fly strictly away from Patna Airport (10km red zone). Renter is 100% liable for crash damage. No flying in rains or high winds.",
    description: "Sub-249g lightweight 4K HDR drone with tri-directional obstacle sensing, true vertical shooting for social media, 3x Intelligent batteries and multi-charger.",
    ownerName: "Amitabh Verma",
    ownerPhone: "+91 99551 23412",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "item-patna-8",
    name: "Yamaha F280 Acoustic Guitar + Padded Bag, Capo & Tuner",
    category: "sound",
    condition: "Excellent",
    rating: 4.88,
    rentalsCount: 20,
    hourlyPrice: 50,
    dayPrice: 260,
    deposit: 1200,
    minHours: 2,
    pincode: "800001",
    area: "Boring Canal Road, Near Panchmukhi Mandir",
    window: "09:00 AM – 09:00 PM",
    instructions: "Pick up at Canal Heights. Free guitar pick set included.",
    rules: "Keep in gig bag when not playing. Do not expose to moisture or direct sunlight.",
    description: "Warm, resonant tone perfect for acoustic jamming, weekend practice, recordings, or video shoots. Recently strung with D'Addario phosphor bronze strings.",
    ownerName: "Rohan Kapoor",
    ownerPhone: "+91 94700 89123",
    isPaused: false,
    photos: [
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// Initial bookings showing both pending & accepted states (PRD Section 5 & 6)
const INITIAL_BOOKINGS = [
  {
    id: "RK-8041",
    itemId: "item-patna-1",
    itemName: "Sony Alpha A7 III Full-Frame Camera + 28-70mm OSS Kit",
    itemThumb: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    itemPincode: "800001",
    itemArea: "Boring Road, Near Alankar Jewellers",
    ownerName: "Rahul Sharma",
    ownerPhone: "+91 98350 41289",
    renterName: "Kunal Kashyap",
    renterPhone: "9835112233",
    renterEmail: "kunal.patna@gmail.com",
    renterPincode: "800001",
    renterAddress: "Flat 402, Shivam Apartments, Boring Canal Rd",
    renterIdType: "Aadhaar Card",
    renterIdNumber: "XXXX-XXXX-4891",
    purpose: "Sister's pre-wedding photoshoot in Eco Park",
    notes: "Need an extra SD card if available.",
    date: getFormattedDate(1), // Tomorrow
    startTime: "10:00",
    hours: 6,
    fulfillment: "pickup",
    rentAmount: 1080,
    depositAmount: 5000,
    totalPayable: 6080,
    status: "Accepted", // PRD: reveals contact
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: "RK-8092",
    itemId: "item-patna-2",
    itemName: "JBL PartyBox 310 Portable Bluetooth Party Speaker (240W)",
    itemThumb: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
    itemPincode: "800020",
    itemArea: "Kankarbagh, Near Colony More",
    ownerName: "Priya Varma",
    ownerPhone: "+91 94312 87654",
    renterName: "Ananya Sen",
    renterPhone: "9430298711",
    renterEmail: "ananya.sen@outlook.com",
    renterPincode: "800020",
    renterAddress: "House 12B, Road 4, Kankarbagh",
    renterIdType: "Driving License",
    renterIdNumber: "BR-01-2021-008219",
    purpose: "Rooftop 25th birthday party for 20 friends",
    notes: "Will pick up by car around 5 PM.",
    date: getFormattedDate(2), // Day after tomorrow
    startTime: "17:00",
    hours: 8,
    fulfillment: "pickup",
    rentAmount: 900, // Capped by day rate! (8*140 = 1120 > 900)
    depositAmount: 3000,
    totalPayable: 3900,
    status: "Pending", // PRD: contact locked!
    createdAt: new Date(Date.now() - 3600000 * 1).toISOString()
  }
];

// Helper to format ISO date to YYYY-MM-DD
function getFormattedDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

// =============================================================================
// 2. State Management with LocalStorage
// =============================================================================
class RentKaroStore {
  constructor() {
    this.storageKeyItems = "rentkaro_items_v1";
    this.storageKeyBookings = "rentkaro_bookings_v1";
    this.storageKeyTheme = "rentkaro_theme_v1";
    this.storageKeyRole = "rentkaro_role_v1";

    this.items = this.loadItems();
    this.bookings = this.loadBookings();
    this.activeRole = localStorage.getItem(this.storageKeyRole) || "renter";
    this.theme = localStorage.getItem(this.storageKeyTheme) || "light";

    // Marketplace Filters State
    this.filter = {
      keyword: "",
      pincode: "800001",
      category: "all",
      sortBy: "nearest"
    };

    // Active listing form photos state
    this.currentListingPhotos = [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
    ];

    // Currently opened modal item
    this.activeModalItem = null;
  }

  loadItems() {
    const raw = localStorage.getItem(this.storageKeyItems);
    if (!raw) {
      localStorage.setItem(this.storageKeyItems, JSON.stringify(INITIAL_ITEMS));
      return [...INITIAL_ITEMS];
    }
    try {
      return JSON.parse(raw);
    } catch {
      return [...INITIAL_ITEMS];
    }
  }

  saveItems() {
    localStorage.setItem(this.storageKeyItems, JSON.stringify(this.items));
  }

  loadBookings() {
    const raw = localStorage.getItem(this.storageKeyBookings);
    if (!raw) {
      localStorage.setItem(this.storageKeyBookings, JSON.stringify(INITIAL_BOOKINGS));
      return [...INITIAL_BOOKINGS];
    }
    try {
      return JSON.parse(raw);
    } catch {
      return [...INITIAL_BOOKINGS];
    }
  }

  saveBookings() {
    localStorage.setItem(this.storageKeyBookings, JSON.stringify(this.bookings));
  }

  resetDemoData() {
    localStorage.removeItem(this.storageKeyItems);
    localStorage.removeItem(this.storageKeyBookings);
    this.items = [...INITIAL_ITEMS];
    this.bookings = [...INITIAL_BOOKINGS];
    this.saveItems();
    this.saveBookings();
  }

  addItem(newItem) {
    this.items.unshift(newItem);
    this.saveItems();
  }

  togglePauseItem(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      item.isPaused = !item.isPaused;
      this.saveItems();
      return item;
    }
    return null;
  }

  addBooking(bookingData) {
    this.bookings.unshift(bookingData);
    this.saveBookings();
    return bookingData;
  }

  updateBookingStatus(bookingId, newStatus) {
    const booking = this.bookings.find(b => b.id === bookingId);
    if (booking) {
      booking.status = newStatus;
      this.saveBookings();
      return booking;
    }
    return null;
  }

  getPendingRequestsForOwner() {
    // For demo convenience, returns requests for current items
    return this.bookings.filter(b => b.status === "Pending");
  }

  getAcceptedCount() {
    return this.bookings.filter(b => b.status === "Accepted").length;
  }
}

// Instantiate store
const store = new RentKaroStore();

// =============================================================================
// 3. Section 7: PRD Pricing Calculation Engine
// "Rent = hours × hourly price, capped at the day rate per 24 hours."
// =============================================================================
function calculateRentalCost(hours, hourlyPrice, dayPrice, deposit, isDelivery = false) {
  const safeHours = Math.max(1, parseInt(hours, 10) || 1);
  const fullDays = Math.floor(safeHours / 24);
  const remainderHours = safeHours % 24;

  // Remainder hours cost: capped by day price
  const remainderHourlyRaw = remainderHours * hourlyPrice;
  const remainderCapped = Math.min(remainderHourlyRaw, dayPrice);

  const uncappedTotalRent = safeHours * hourlyPrice;
  const cappedTotalRent = (fullDays * dayPrice) + remainderCapped;

  const savings = Math.max(0, uncappedTotalRent - cappedTotalRent);
  const isCapApplied = savings > 0;

  const deliveryFee = isDelivery ? 99 : 0;
  const grandTotal = cappedTotalRent + deposit + deliveryFee;

  return {
    hours: safeHours,
    fullDays,
    remainderHours,
    uncappedTotalRent,
    totalRent: cappedTotalRent,
    savings,
    isCapApplied,
    deposit,
    deliveryFee,
    grandTotal
  };
}

// Proximity / distance calculator from 6-digit Patna pincodes
function getPincodeDistanceScore(itemPincode, userPincode) {
  const p1 = parseInt(itemPincode, 10) || 800001;
  const p2 = parseInt(userPincode, 10) || 800001;
  const diff = Math.abs(p1 - p2);

  if (diff === 0) return { km: 0.8, score: 0 };
  if (diff <= 3) return { km: (diff * 1.4).toFixed(1), score: diff * 2 };
  if (diff <= 10) return { km: (diff * 1.8).toFixed(1), score: diff * 4 };
  return { km: (diff * 2.2).toFixed(1), score: diff * 10 };
}

// Patna Pincode Area Name Resolver
const PATNA_PINCODES = {
  "800001": "Boring Rd / Fraser Rd",
  "800020": "Kankarbagh",
  "800013": "Patliputra Colony",
  "800014": "Bailey Rd / Saguna More",
  "800016": "Rajendra Nagar",
  "800002": "Anisabad",
  "800003": "Gulzarbagh",
  "800004": "Patna City",
  "800005": "Ashok Rajpath"
};

// =============================================================================
// 4. Toast Notification Controller
// =============================================================================
function showToast(message, type = "info", duration = 3500) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.setAttribute("role", "alert");

  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "error") icon = "⚠️";

  toast.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span>${icon}</span>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close-btn" aria-label="Dismiss">&times;</button>
  `;

  const closeBtn = toast.querySelector(".toast-close-btn");
  closeBtn.addEventListener("click", () => toast.remove());

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(20px)";
      setTimeout(() => toast.remove(), 250);
    }
  }, duration);
}

// =============================================================================
// 5. UI Controller & Navigation
// =============================================================================
class RentKaroApp {
  constructor() {
    this.initTheme();
    this.initRole();
    this.bindEvents();
    this.updateBadges();
    this.renderMarketplace();
    this.renderPhotoPreviews();
    this.updateLiveListingPreview();
  }

  // Dark / Light Theme
  initTheme() {
    document.body.setAttribute("data-theme", store.theme);
  }

  toggleTheme() {
    store.theme = store.theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", store.theme);
    localStorage.setItem(store.storageKeyTheme, store.theme);
    showToast(`Switched to ${store.theme === "dark" ? "Dark Mode (Mint on Slate)" : "Warm Off-White Light Mode"}`, "info", 2000);
  }

  // Renter vs Owner View Role Switcher
  initRole() {
    this.setRole(store.activeRole, false);
  }

  setRole(role, notify = true) {
    store.activeRole = role;
    localStorage.setItem(store.storageKeyRole, role);

    document.querySelectorAll(".role-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.role === role);
    });

    if (notify) {
      if (role === "owner") {
        this.switchView("owner");
        showToast("Switched to Owner Perspective. Review incoming requests & listings.", "info");
      } else {
        this.switchView("browse");
        showToast("Switched to Renter Perspective. Browse and rent neighbourhood gear.", "info");
      }
    }
  }

  // Navigation Tab Switching
  switchView(viewName) {
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.classList.toggle("active", tab.dataset.view === viewName);
    });

    document.querySelectorAll(".view-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `view-${viewName}`);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    // Refresh views on switch
    if (viewName === "browse") {
      this.renderMarketplace();
    } else if (viewName === "owner") {
      this.renderOwnerDashboard();
    } else if (viewName === "bookings") {
      this.renderRenterBookings();
    }

    this.updateBadges();
  }

  // Update navigation count badges
  updateBadges() {
    const pendingRequests = store.getPendingRequestsForOwner().length;
    const pendingBadge = document.getElementById("owner-requests-badge");
    if (pendingBadge) {
      pendingBadge.textContent = pendingRequests;
      pendingBadge.style.display = pendingRequests > 0 ? "inline-flex" : "none";
    }

    const renterBookingsCount = store.bookings.length;
    const renterBadge = document.getElementById("renter-bookings-badge");
    if (renterBadge) {
      renterBadge.textContent = renterBookingsCount;
      renterBadge.style.display = renterBookingsCount > 0 ? "inline-flex" : "none";
    }
  }

  // ===========================================================================
  // 6. Marketplace & Search Engine (F3, F4)
  // ===========================================================================
  renderMarketplace() {
    const grid = document.getElementById("items-grid");
    const emptyState = document.getElementById("items-empty-state");
    const countLabel = document.getElementById("results-count");
    const locationInfo = document.getElementById("results-location-info");
    if (!grid) return;

    let items = [...store.items];

    // Filter by keyword
    const kw = store.filter.keyword.trim().toLowerCase();
    if (kw) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(kw) ||
        item.description.toLowerCase().includes(kw) ||
        item.area.toLowerCase().includes(kw) ||
        item.category.toLowerCase().includes(kw)
      );
    }

    // Filter by category
    if (store.filter.category !== "all") {
      items = items.filter(item => item.category === store.filter.category);
    }

    // Proximity Scoring using user pincode
    const userPincode = store.filter.pincode || "800001";
    items.forEach(item => {
      const prox = getPincodeDistanceScore(item.pincode, userPincode);
      item._distanceKm = prox.km;
      item._proxScore = prox.score;
    });

    // Sorting (F4: Nearest pincode, price asc/desc, rating)
    if (store.filter.sortBy === "nearest") {
      items.sort((a, b) => a._proxScore - b._proxScore);
    } else if (store.filter.sortBy === "price-asc") {
      items.sort((a, b) => a.hourlyPrice - b.hourlyPrice);
    } else if (store.filter.sortBy === "price-desc") {
      items.sort((a, b) => b.hourlyPrice - a.hourlyPrice);
    } else if (store.filter.sortBy === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    // Active city label update
    const areaName = PATNA_PINCODES[userPincode] || "Patna";
    if (locationInfo) {
      locationInfo.textContent = `near ${userPincode} (${areaName})`;
    }

    if (countLabel) {
      countLabel.textContent = `Showing ${items.length} ${items.length === 1 ? 'item' : 'items'}`;
    }

    if (items.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    // Render cards
    grid.innerHTML = items.map(item => {
      const categoryIcon = this.getCategoryEmoji(item.category);
      const isPausedBadge = item.isPaused 
        ? `<span class="item-cond-badge" style="background-color: #64748B;">Paused</span>` 
        : `<span class="item-cond-badge">${item.condition}</span>`;

      return `
        <div class="item-card ${item.isPaused ? 'item-card-paused' : ''}" data-id="${item.id}">
          <div class="item-card-image-wrap">
            <img src="${item.photos[0] || ''}" alt="${item.name}" class="item-card-img" loading="lazy">
            ${isPausedBadge}
            <div class="item-proximity-badge" title="Estimated distance from your pincode ${userPincode}">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>~${item._distanceKm} km</span>
            </div>
          </div>

          <div class="item-card-body">
            <div class="item-cat-tag">${categoryIcon} ${item.category}</div>
            <h3 class="item-card-title">${item.name}</h3>
            
            <div class="item-location-line">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>${item.area} · ${item.pincode}</span>
            </div>

            <div class="item-price-row">
              <div class="item-price-col">
                <span class="price-val">₹${item.hourlyPrice}</span>
                <span class="price-unit">/ hr</span>
              </div>
              <div class="item-day-cap-col">
                <span class="day-cap-label">Day Cap:</span>
                <span class="day-cap-val">₹${item.dayPrice}</span>
              </div>
            </div>

            <div class="item-deposit-line">
              <span class="deposit-label">Refundable Security Deposit:</span>
              <span class="deposit-val">₹${item.deposit}</span>
            </div>

            <div class="item-card-footer">
              <div class="owner-chip">
                <span class="owner-avatar-mini">${item.ownerName.charAt(0)}</span>
                <span>${item.ownerName.split(" ")[0]} · ★ ${item.rating}</span>
              </div>
              <button class="btn-primary btn-sm btn-open-item" data-id="${item.id}" ${item.isPaused ? 'disabled' : ''}>
                ${item.isPaused ? 'Paused' : 'Rent Item'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    // Bind card click triggers to open item detail & booking modal
    grid.querySelectorAll(".btn-open-item").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const itemId = btn.getAttribute("data-id");
        this.openItemModal(itemId);
      });
    });

    grid.querySelectorAll(".item-card").forEach(card => {
      card.addEventListener("click", () => {
        const itemId = card.getAttribute("data-id");
        this.openItemModal(itemId);
      });
    });
  }

  getCategoryEmoji(cat) {
    switch (cat) {
      case "cameras": return "📷";
      case "sound": return "🔊";
      case "tools": return "🔨";
      case "camping": return "⛺";
      case "electronics": return "📽️";
      default: return "📦";
    }
  }

  // ===========================================================================
  // 7. Item Detail Modal & Live Booking Calculator (F5, F9, Section 7)
  // ===========================================================================
  openItemModal(itemId) {
    const item = store.items.find(i => i.id === itemId);
    if (!item) return;

    store.activeModalItem = item;

    const modal = document.getElementById("item-modal-backdrop");
    if (!modal) return;

    // Set fields
    document.getElementById("book-item-id").value = item.id;
    document.getElementById("modal-item-title").textContent = item.name;
    document.getElementById("modal-item-desc").textContent = item.description;
    document.getElementById("modal-condition-badge").textContent = item.condition;
    document.getElementById("modal-category-badge").textContent = `${this.getCategoryEmoji(item.category)} ${item.category}`;
    document.getElementById("modal-location-badge").textContent = `${item.area} · ${item.pincode}`;
    document.getElementById("modal-rating-badge").textContent = `★ ${item.rating} (${item.rentalsCount} bookings in Patna)`;
    document.getElementById("modal-hourly-rate").textContent = `₹${item.hourlyPrice}/hr`;
    document.getElementById("modal-day-rate").textContent = `₹${item.dayPrice}/24h`;
    document.getElementById("modal-deposit-amount").textContent = `₹${item.deposit}`;
    document.getElementById("modal-min-hours").textContent = `${item.minHours} Hours`;
    document.getElementById("modal-time-window").textContent = item.window;
    document.getElementById("modal-pickup-notes").textContent = item.instructions || "Inspect item carefully at pickup.";
    document.getElementById("modal-rules-box").textContent = item.rules || "Treat item with care and return promptly.";
    document.getElementById("modal-owner-name").textContent = item.ownerName;

    // Gallery Photos
    const mainImg = document.getElementById("modal-main-img");
    const thumbStrip = document.getElementById("modal-thumb-strip");
    
    if (item.photos && item.photos.length > 0) {
      mainImg.src = item.photos[0];
      thumbStrip.innerHTML = item.photos.map((url, idx) => `
        <button type="button" class="thumb-btn ${idx === 0 ? 'active' : ''}" data-url="${url}">
          <img src="${url}" alt="Thumbnail ${idx + 1}">
        </button>
      `).join("");

      thumbStrip.querySelectorAll(".thumb-btn").forEach(tBtn => {
        tBtn.addEventListener("click", () => {
          thumbStrip.querySelectorAll(".thumb-btn").forEach(b => b.classList.remove("active"));
          tBtn.classList.add("active");
          mainImg.src = tBtn.dataset.url;
        });
      });
    }

    // Set default booking date to tomorrow
    const bookDateInput = document.getElementById("book-date");
    const tomorrowStr = getFormattedDate(1);
    bookDateInput.value = tomorrowStr;
    bookDateInput.min = getFormattedDate(0);

    // Set minimum hours
    const hoursInput = document.getElementById("book-hours");
    hoursInput.value = item.minHours;
    hoursInput.min = item.minHours;

    // Update Live Pricing
    this.updateLiveBookingCalculation();

    // Show modal
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  closeItemModal() {
    const modal = document.getElementById("item-modal-backdrop");
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "";
    store.activeModalItem = null;
  }

  updateLiveBookingCalculation() {
    const item = store.activeModalItem;
    if (!item) return;

    const hoursInput = document.getElementById("book-hours");
    const hours = parseInt(hoursInput.value, 10) || item.minHours;
    const isDelivery = document.querySelector('input[name="fulfillment"]:checked')?.value === "delivery";

    const calc = calculateRentalCost(hours, item.hourlyPrice, item.dayPrice, item.deposit, isDelivery);

    // Update UI elements
    const hoursBadge = document.getElementById("book-hours-badge");
    if (hoursBadge) {
      if (hours >= 24) {
        const d = Math.floor(hours / 24);
        const rem = hours % 24;
        hoursBadge.textContent = rem > 0 ? `${d}d ${rem}h (${hours} hrs)` : `${d} Day${d > 1 ? 's' : ''} (${hours} hrs)`;
      } else {
        hoursBadge.textContent = `${hours} Hours`;
      }
    }

    const rentLabel = document.getElementById("price-rent-calc-label");
    if (rentLabel) {
      if (calc.fullDays > 0) {
        rentLabel.textContent = `Rent (${calc.fullDays}d @ ₹${item.dayPrice}${calc.remainderHours > 0 ? ` + ${calc.remainderHours}h` : ''})`;
      } else {
        rentLabel.textContent = `Rent (${hours} hrs × ₹${item.hourlyPrice})`;
      }
    }

    document.getElementById("price-rent-subtotal").textContent = `₹${calc.totalRent}`;

    const savingsRow = document.getElementById("row-day-cap-savings");
    const savingsVal = document.getElementById("price-savings-val");
    const capTag = document.getElementById("pricing-cap-tag");

    if (calc.isCapApplied) {
      savingsRow.style.display = "flex";
      savingsVal.textContent = `-₹${calc.savings}`;
      capTag.textContent = "Day Cap Active! 🎉";
      capTag.style.backgroundColor = "var(--color-primary-light)";
      capTag.style.color = "var(--color-primary)";
    } else {
      savingsRow.style.display = "none";
      capTag.textContent = "Standard Hourly Rate";
      capTag.style.backgroundColor = "var(--color-surface-sunken)";
      capTag.style.color = "var(--color-text-secondary)";
    }

    const deliveryRow = document.getElementById("row-delivery-fee");
    if (deliveryRow) {
      deliveryRow.style.display = isDelivery ? "flex" : "none";
    }

    document.getElementById("price-deposit-val").textContent = `₹${calc.deposit}`;
    document.getElementById("price-grand-total").textContent = `₹${calc.grandTotal}`;

    // Conflict Check (F9: Double Booking Prevention)
    this.checkDoubleBookingConflict();
  }

  checkDoubleBookingConflict() {
    const item = store.activeModalItem;
    if (!item) return;

    const dateVal = document.getElementById("book-date")?.value;
    const timeVal = document.getElementById("book-time")?.value;
    const alertBox = document.getElementById("booking-conflict-alert");
    const submitBtn = document.getElementById("btn-submit-booking");

    if (!alertBox || !submitBtn) return;

    // Check if an accepted booking already exists for this exact item and date
    const hasConflict = store.bookings.some(b => 
      b.itemId === item.id && 
      b.status === "Accepted" && 
      b.date === dateVal
    );

    if (hasConflict) {
      alertBox.style.display = "block";
      alertBox.innerHTML = `⚠️ <strong>Slot Conflict:</strong> This item is already booked by another neighbour on ${dateVal}. Please choose another date.`;
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.6";
    } else {
      alertBox.style.display = "none";
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }
  }

  handleBookingSubmit(e) {
    e.preventDefault();
    const item = store.activeModalItem;
    if (!item) return;

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const renterName = document.getElementById("renter-name").value.trim();
    const renterPhone = document.getElementById("renter-phone").value.trim();
    const renterEmail = document.getElementById("renter-email").value.trim();
    const renterPincode = document.getElementById("renter-pincode").value.trim();
    const renterAddress = document.getElementById("renter-address").value.trim();
    const renterIdType = document.getElementById("renter-id-type").value;
    const renterIdNumber = document.getElementById("renter-id-number").value.trim();
    const renterPurpose = document.getElementById("renter-purpose").value.trim();
    const renterNotes = document.getElementById("renter-notes").value.trim();
    const bookDate = document.getElementById("book-date").value;
    const bookTime = document.getElementById("book-time").value;
    const hours = parseInt(document.getElementById("book-hours").value, 10) || item.minHours;
    const fulfillment = document.querySelector('input[name="fulfillment"]:checked').value;

    const calc = calculateRentalCost(hours, item.hourlyPrice, item.dayPrice, item.deposit, fulfillment === "delivery");

    const newBooking = {
      id: `RK-${Math.floor(1000 + Math.random() * 9000)}`,
      itemId: item.id,
      itemName: item.name,
      itemThumb: item.photos[0] || "",
      itemPincode: item.pincode,
      itemArea: item.area,
      ownerName: item.ownerName,
      ownerPhone: item.ownerPhone,
      renterName,
      renterPhone,
      renterEmail,
      renterPincode,
      renterAddress,
      renterIdType,
      renterIdNumber,
      purpose: renterPurpose,
      notes: renterNotes,
      date: bookDate,
      startTime: bookTime,
      hours,
      fulfillment,
      rentAmount: calc.totalRent,
      depositAmount: calc.deposit,
      totalPayable: calc.grandTotal,
      status: "Pending", // Starts in Pending Owner Approval
      createdAt: new Date().toISOString()
    };

    store.addBooking(newBooking);

    this.closeItemModal();
    this.updateBadges();
    this.switchView("bookings");

    showToast(`Request sent to ${item.ownerName}! Track progress under My Bookings.`, "success", 5000);
  }

  // ===========================================================================
  // 8. List an Item Studio & Image Handling (F2, F8)
  // ===========================================================================
  renderPhotoPreviews() {
    const grid = document.getElementById("photo-preview-grid");
    if (!grid) return;

    grid.innerHTML = store.currentListingPhotos.map((url, idx) => `
      <div class="preview-slot">
        <img src="${url}" alt="Listing photo ${idx + 1}">
        <button type="button" class="remove-photo-btn" data-index="${idx}" title="Remove photo">&times;</button>
      </div>
    `).join("");

    grid.querySelectorAll(".remove-photo-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.dataset.index, 10);
        store.currentListingPhotos.splice(idx, 1);
        this.renderPhotoPreviews();
        this.updateLiveListingPreview();
      });
    });
  }

  addPhotoToListing(url) {
    if (store.currentListingPhotos.length >= 4) {
      showToast("Maximum 4 photos allowed per listing.", "error");
      return;
    }
    store.currentListingPhotos.push(url);
    this.renderPhotoPreviews();
    this.updateLiveListingPreview();
  }

  updateLiveListingPreview() {
    const titleVal = document.getElementById("list-name")?.value.trim() || "Sony Alpha A7 III with 28-70mm Kit";
    const catSelect = document.getElementById("list-category");
    const catVal = catSelect?.options[catSelect.selectedIndex]?.text || "📷 Cameras & DSLRs";
    const condVal = document.getElementById("list-condition")?.value || "Excellent";
    const hourlyVal = document.getElementById("list-hourly")?.value || "150";
    const dayVal = document.getElementById("list-day")?.value || "1000";
    const depositVal = document.getElementById("list-deposit")?.value || "4000";
    const pincodeVal = document.getElementById("list-pincode")?.value || "800001";
    const areaVal = document.getElementById("list-area")?.value.trim() || "Boring Road";

    const previewTitle = document.getElementById("preview-title");
    const previewCat = document.getElementById("preview-cat");
    const previewCond = document.getElementById("preview-condition");
    const previewLoc = document.getElementById("preview-location");
    const previewHourly = document.getElementById("preview-hourly");
    const previewDay = document.getElementById("preview-day");
    const previewDeposit = document.getElementById("preview-deposit");
    const previewImg = document.getElementById("preview-img");

    if (previewTitle) previewTitle.textContent = titleVal;
    if (previewCat) previewCat.textContent = catVal;
    if (previewCond) previewCond.textContent = condVal;
    if (previewLoc) previewLoc.textContent = `${areaVal} · ${pincodeVal}`;
    if (previewHourly) previewHourly.textContent = `₹${hourlyVal}`;
    if (previewDay) previewDay.textContent = `₹${dayVal}`;
    if (previewDeposit) previewDeposit.textContent = `₹${depositVal}`;

    if (previewImg && store.currentListingPhotos.length > 0) {
      previewImg.src = store.currentListingPhotos[0];
    }
  }

  handlePublishListing(e) {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (store.currentListingPhotos.length === 0) {
      showToast("Please add at least 1 photo of your item.", "error");
      return;
    }

    const name = document.getElementById("list-name").value.trim();
    const category = document.getElementById("list-category").value;
    const condition = document.getElementById("list-condition").value;
    const description = document.getElementById("list-description").value.trim();
    const hourlyPrice = parseInt(document.getElementById("list-hourly").value, 10);
    const dayPrice = parseInt(document.getElementById("list-day").value, 10);
    const deposit = parseInt(document.getElementById("list-deposit").value, 10);
    const minHours = parseInt(document.getElementById("list-min-hours").value, 10) || 2;
    const pincode = document.getElementById("list-pincode").value.trim();
    const area = document.getElementById("list-area").value.trim();
    const windowTime = document.getElementById("list-window").value.trim();
    const instructions = document.getElementById("list-instructions").value.trim();
    const rules = document.getElementById("list-rules").value.trim();
    const ownerName = document.getElementById("list-owner-name").value.trim();
    const ownerPhone = document.getElementById("list-owner-phone").value.trim();

    const newItem = {
      id: `item-user-${Date.now()}`,
      name,
      category,
      condition,
      rating: 5.0,
      rentalsCount: 0,
      hourlyPrice,
      dayPrice,
      deposit,
      minHours,
      pincode,
      area,
      window: windowTime,
      instructions,
      rules,
      description,
      ownerName,
      ownerPhone: `+91 ${ownerPhone}`,
      isPaused: false,
      photos: [...store.currentListingPhotos]
    };

    store.addItem(newItem);
    form.reset();
    store.currentListingPhotos = ["https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"];
    this.renderPhotoPreviews();

    showToast("🎉 Item successfully listed! It appears in search immediately.", "success", 4000);
    this.switchView("owner");
  }

  // ===========================================================================
  // 9. Owner Management Dashboard (F6, F8)
  // ===========================================================================
  renderOwnerDashboard() {
    // Update Metrics
    const totalListings = store.items.length;
    const pendingRequests = store.getPendingRequestsForOwner().length;
    const acceptedCount = store.getAcceptedCount();

    document.getElementById("metric-total-listings").textContent = totalListings;
    document.getElementById("metric-pending-requests").textContent = pendingRequests;
    document.getElementById("metric-accepted-bookings").textContent = acceptedCount;
    document.getElementById("subtab-requests-count").textContent = pendingRequests;
    document.getElementById("subtab-listings-count").textContent = totalListings;

    // Calculate total earned from accepted bookings
    const earnings = store.bookings
      .filter(b => b.status === "Accepted")
      .reduce((acc, curr) => acc + (curr.rentAmount || 0), 0);
    document.getElementById("metric-estimated-earnings").textContent = `₹${earnings.toLocaleString()}`;

    // Render Requests List
    this.renderOwnerRequestsList();

    // Render Active Listings List
    this.renderOwnerListingsList();
  }

  renderOwnerRequestsList() {
    const list = document.getElementById("owner-requests-list");
    if (!list) return;

    const pendingRequests = store.getPendingRequestsForOwner();

    if (pendingRequests.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">☕</div>
          <h3>All caught up! No pending requests</h3>
          <p>When neighbours request to rent your gear, their booking details and ID will appear here for your review.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = pendingRequests.map(req => `
      <div class="request-card" data-req-id="${req.id}">
        <div class="req-item-thumb">
          <img src="${req.itemThumb}" alt="${req.itemName}">
          <div class="req-item-name">${req.itemName}</div>
        </div>

        <div class="req-meta-details">
          <span class="req-id-badge">Request #${req.id}</span>
          <div class="req-renter-name">Renter: ${req.renterName}</div>
          
          <div class="req-data-row">
            <span class="req-data-item"><strong>Date:</strong> ${req.date} at ${req.startTime}</span>
            <span class="req-data-item"><strong>Duration:</strong> ${req.hours} Hours</span>
            <span class="req-data-item"><strong>Fulfillment:</strong> ${req.fulfillment === 'delivery' ? 'Doorstep Drop' : 'Self Pickup'}</span>
          </div>

          <div class="req-data-row">
            <span class="req-data-item"><strong>Renter Phone:</strong> +91 ${req.renterPhone}</span>
            <span class="req-data-item"><strong>Area:</strong> ${req.renterAddress} (${req.renterPincode})</span>
          </div>

          <div style="display: flex; gap: 8px; align-items: center; margin-top: 4px;">
            <div class="req-id-verify">
              🛡️ <strong>${req.renterIdType}:</strong> ${req.renterIdNumber}
            </div>
            <div class="req-id-verify">
              🎯 <strong>Purpose:</strong> ${req.purpose}
            </div>
          </div>

          ${req.notes ? `<div style="font-size: 0.8125rem; color: var(--color-text-secondary); margin-top: 2px;"><em>"${req.notes}"</em></div>` : ''}
        </div>

        <div class="req-actions-col">
          <div class="req-price-summary">
            <span class="req-total-rent">₹${req.rentAmount}</span>
            <span class="req-deposit-note">+ ₹${req.depositAmount} Deposit</span>
          </div>

          <div class="req-btn-group">
            <button class="btn-primary btn-success btn-sm btn-accept-req" data-id="${req.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Accept Request</span>
            </button>
            <button class="btn-secondary btn-danger btn-sm btn-decline-req" data-id="${req.id}">
              <span>Decline</span>
            </button>
          </div>
        </div>
      </div>
    `).join("");

    list.querySelectorAll(".btn-accept-req").forEach(btn => {
      btn.addEventListener("click", () => {
        const reqId = btn.dataset.id;
        store.updateBookingStatus(reqId, "Accepted");
        showToast(`Request #${reqId} accepted! Your contact has been revealed to the renter.`, "success");
        this.renderOwnerDashboard();
        this.updateBadges();
      });
    });

    list.querySelectorAll(".btn-decline-req").forEach(btn => {
      btn.addEventListener("click", () => {
        const reqId = btn.dataset.id;
        store.updateBookingStatus(reqId, "Declined");
        showToast(`Request #${reqId} declined.`, "error");
        this.renderOwnerDashboard();
        this.updateBadges();
      });
    });
  }

  renderOwnerListingsList() {
    const grid = document.getElementById("owner-listings-grid");
    if (!grid) return;

    grid.innerHTML = store.items.map(item => `
      <div class="owner-item-card ${item.isPaused ? 'is-paused' : ''}">
        <div class="owner-item-header">
          <img src="${item.photos[0] || ''}" alt="${item.name}">
          <span class="owner-status-pill ${item.isPaused ? 'status-paused' : 'status-active'}">
            ${item.isPaused ? 'Paused' : 'Active'}
          </span>
        </div>

        <div class="owner-item-content">
          <div class="item-cat-tag">${this.getCategoryEmoji(item.category)} ${item.category}</div>
          <h4 style="font-size: 1rem; font-weight: 600;">${item.name}</h4>
          <div style="font-size: 0.8125rem; color: var(--color-text-tertiary);">
            ${item.area} · ₹${item.hourlyPrice}/hr (Cap: ₹${item.dayPrice})
          </div>

          <div class="owner-item-controls">
            <span style="font-size: 0.75rem; color: var(--color-text-secondary);">Deposit: ₹${item.deposit}</span>
            <button class="btn-secondary btn-sm btn-toggle-pause" data-id="${item.id}">
              ${item.isPaused ? '▶️ Resume Listing' : '⏸️ Pause Listing'}
            </button>
          </div>
        </div>
      </div>
    `).join("");

    grid.querySelectorAll(".btn-toggle-pause").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.dataset.id;
        const updated = store.togglePauseItem(itemId);
        if (updated) {
          showToast(`Listing ${updated.isPaused ? 'paused (hidden from renters)' : 'resumed and active in search'}.`, "info");
          this.renderOwnerListingsList();
          this.renderMarketplace();
        }
      });
    });
  }

  // ===========================================================================
  // 10. Renter Booking Tracker (F7, Section 5 & 10)
  // ===========================================================================
  renderRenterBookings(statusFilter = "all") {
    const list = document.getElementById("renter-bookings-list");
    if (!list) return;

    let bookings = [...store.bookings];

    // Counts update
    document.getElementById("count-all-bookings").textContent = bookings.length;
    document.getElementById("count-pending-bookings").textContent = bookings.filter(b => b.status === "Pending").length;
    document.getElementById("count-accepted-bookings").textContent = bookings.filter(b => b.status === "Accepted").length;
    document.getElementById("count-declined-bookings").textContent = bookings.filter(b => b.status === "Declined").length;

    if (statusFilter !== "all") {
      bookings = bookings.filter(b => b.status === statusFilter);
    }

    if (bookings.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🎒</div>
          <h3>No bookings under "${statusFilter}"</h3>
          <p>Rent cameras, speakers, tools or camping tents from nearby Patna neighbours.</p>
          <button class="btn-primary" id="btn-empty-browse-now">Browse Available Gear</button>
        </div>
      `;
      const btn = list.querySelector("#btn-empty-browse-now");
      if (btn) btn.addEventListener("click", () => this.switchView("browse"));
      return;
    }

    list.innerHTML = bookings.map(b => {
      // PRD Section 5 & 10 Requirement:
      // "Owner contact is shown after acceptance"
      const isAccepted = b.status === "Accepted";
      const isDeclined = b.status === "Declined";

      let contactBoxHtml = "";
      if (isAccepted) {
        contactBoxHtml = `
          <div class="contact-unlocked-box">
            <div class="unlocked-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Booking Confirmed! Owner Contact Unlocked</span>
            </div>
            <div class="unlocked-details-row">
              <div>
                <strong>Owner:</strong> ${b.ownerName}<br>
                <strong>Phone:</strong> <a href="tel:${b.ownerPhone}" style="color: var(--color-primary); font-weight: 700;">${b.ownerPhone}</a>
              </div>
              <div>
                <strong>Pickup Spot:</strong> ${b.itemArea}<br>
                <strong>Instructions:</strong> Bring Govt ID & inspection deposit.
              </div>
            </div>
            <div class="unlocked-actions">
              <a href="tel:${b.ownerPhone}" class="btn-primary btn-sm">📞 Call Owner</a>
              <button class="btn-secondary btn-sm" onclick="alert('Pickup window: 08:00 AM - 09:30 PM. Please inspect items together before handover.')">ℹ️ Handover Guide</button>
            </div>
          </div>
        `;
      } else if (isDeclined) {
        contactBoxHtml = `
          <div class="contact-locked-box" style="border-color: var(--color-error-border); color: var(--color-error);">
            <span>❌ <strong>Request Declined:</strong> The owner was unable to accommodate this time slot. No deposit was charged.</span>
          </div>
        `;
      } else {
        contactBoxHtml = `
          <div class="contact-locked-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <div>
              <strong>Owner Contact Protected:</strong> Phone number and exact address will be unlocked immediately once ${b.ownerName} accepts your request.
            </div>
          </div>
        `;
      }

      return `
        <div class="booking-card">
          <div class="booking-gear-col">
            <img src="${b.itemThumb}" alt="${b.itemName}" class="booking-gear-thumb">
            <div class="booking-gear-title">${b.itemName}</div>
            <div style="font-size: 0.8125rem; color: var(--color-text-tertiary);">
              📍 ${b.itemArea} (${b.itemPincode})
            </div>
          </div>

          <div class="booking-detail-col">
            <div class="booking-header-row">
              <div class="booking-badge-group">
                <span class="booking-code">#${b.id}</span>
                <span class="status-badge ${b.status}">${b.status}</span>
              </div>
              <span style="font-size: 0.75rem; color: var(--color-text-tertiary);">
                Requested on ${new Date(b.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div class="booking-summary-grid">
              <div class="bs-cell">
                <span class="bs-label">Reservation Date</span>
                <span class="bs-val">${b.date} (${b.startTime})</span>
              </div>
              <div class="bs-cell">
                <span class="bs-label">Duration</span>
                <span class="bs-val">${b.hours} Hours</span>
              </div>
              <div class="bs-cell">
                <span class="bs-label">Fulfillment</span>
                <span class="bs-val">${b.fulfillment === 'delivery' ? 'Doorstep Drop (+₹99)' : 'Self Pickup (Free)'}</span>
              </div>
              <div class="bs-cell">
                <span class="bs-label">Calculated Rent</span>
                <span class="bs-val">₹${b.rentAmount}</span>
              </div>
              <div class="bs-cell">
                <span class="bs-label">Security Deposit</span>
                <span class="bs-val highlight-amber">₹${b.depositAmount} (Refundable)</span>
              </div>
              <div class="bs-cell">
                <span class="bs-label">Total Payable</span>
                <span class="bs-val highlight-teal">₹${b.totalPayable}</span>
              </div>
            </div>

            <!-- PRD Anti-Bypass Contact Display -->
            ${contactBoxHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  // ===========================================================================
  // 11. Event Listeners & Wire-up
  // ===========================================================================
  bindEvents() {
    // Nav tabs
    document.querySelectorAll(".nav-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        this.switchView(tab.dataset.view);
      });
    });

    // Brand logo
    document.getElementById("brand-logo-btn")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.switchView("browse");
    });

    // Theme toggle
    document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
      this.toggleTheme();
    });

    // Role switcher
    document.getElementById("role-renter-btn")?.addEventListener("click", () => this.setRole("renter"));
    document.getElementById("role-owner-btn")?.addEventListener("click", () => this.setRole("owner"));

    // Landing two-option buttons (F1)
    document.getElementById("btn-choice-rent")?.addEventListener("click", () => {
      const el = document.getElementById("marketplace-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("btn-choice-list")?.addEventListener("click", () => {
      this.switchView("list");
    });

    // Search input (F3)
    const searchInput = document.getElementById("search-keyword");
    const clearBtn = document.getElementById("btn-clear-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        store.filter.keyword = e.target.value;
        if (clearBtn) clearBtn.style.display = e.target.value ? "block" : "none";
        this.renderMarketplace();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        store.filter.keyword = "";
        clearBtn.style.display = "none";
        this.renderMarketplace();
      });
    }

    // Pincode input (F3)
    const pincodeInput = document.getElementById("search-pincode");
    const pincodeBadge = document.getElementById("pincode-area-badge");
    if (pincodeInput) {
      pincodeInput.addEventListener("input", (e) => {
        const val = e.target.value.trim();
        store.filter.pincode = val;
        if (pincodeBadge) {
          pincodeBadge.textContent = PATNA_PINCODES[val] || (val.length === 6 ? "Patna Locality" : "Pincode");
        }
        if (val.length === 6) {
          this.renderMarketplace();
        }
      });
    }

    // Quick Patna Pincode Chips
    document.querySelectorAll(".pincode-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".pincode-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const pin = chip.dataset.pincode;
        if (pincodeInput) pincodeInput.value = pin;
        store.filter.pincode = pin;
        if (pincodeBadge) pincodeBadge.textContent = chip.dataset.area;
        this.renderMarketplace();
      });
    });

    // Category pills (F3)
    document.querySelectorAll(".cat-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        store.filter.category = pill.dataset.category;
        this.renderMarketplace();
      });
    });

    // Sort select (F4)
    document.getElementById("sort-select")?.addEventListener("change", (e) => {
      store.filter.sortBy = e.target.value;
      this.renderMarketplace();
    });

    // Reset filters
    document.getElementById("btn-reset-filters")?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      store.filter.keyword = "";
      store.filter.category = "all";
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
      this.renderMarketplace();
      showToast("Filters reset to default view.", "info");
    });

    document.getElementById("btn-empty-reset")?.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      store.filter.keyword = "";
      store.filter.category = "all";
      this.renderMarketplace();
    });

    // Modal close
    document.getElementById("btn-close-modal")?.addEventListener("click", () => {
      this.closeItemModal();
    });

    document.getElementById("item-modal-backdrop")?.addEventListener("click", (e) => {
      if (e.target.id === "item-modal-backdrop") {
        this.closeItemModal();
      }
    });

    // Modal hours stepper & live price calculation
    const hoursInput = document.getElementById("book-hours");
    document.getElementById("btn-hours-minus")?.addEventListener("click", () => {
      if (!hoursInput) return;
      const minH = store.activeModalItem?.minHours || 1;
      const curr = parseInt(hoursInput.value, 10) || minH;
      if (curr > minH) {
        hoursInput.value = curr - 1;
        this.updateLiveBookingCalculation();
      } else {
        showToast(`Minimum rental duration for this item is ${minH} hours.`, "info");
      }
    });

    document.getElementById("btn-hours-plus")?.addEventListener("click", () => {
      if (!hoursInput) return;
      const curr = parseInt(hoursInput.value, 10) || 1;
      hoursInput.value = curr + 1;
      this.updateLiveBookingCalculation();
    });

    hoursInput?.addEventListener("input", () => {
      this.updateLiveBookingCalculation();
    });

    // Quick hours presets
    document.querySelectorAll(".hour-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".hour-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        if (hoursInput) {
          hoursInput.value = chip.dataset.hrs;
          this.updateLiveBookingCalculation();
        }
      });
    });

    // Fulfillment toggle (pickup vs delivery)
    document.querySelectorAll('input[name="fulfillment"]').forEach(radio => {
      radio.addEventListener("change", (e) => {
        document.querySelectorAll(".fulfillment-card").forEach(c => c.classList.remove("active"));
        e.target.closest(".fulfillment-card")?.classList.add("active");
        this.updateLiveBookingCalculation();
      });
    });

    // Booking date / time change listener (conflict check)
    document.getElementById("book-date")?.addEventListener("change", () => {
      this.checkDoubleBookingConflict();
    });
    document.getElementById("book-time")?.addEventListener("change", () => {
      this.checkDoubleBookingConflict();
    });

    // Booking form submit
    document.getElementById("booking-request-form")?.addEventListener("submit", (e) => {
      this.handleBookingSubmit(e);
    });

    // List Item Form inputs (Live preview updates)
    const listInputs = [
      "list-name", "list-category", "list-condition", "list-hourly",
      "list-day", "list-deposit", "list-pincode", "list-area"
    ];
    listInputs.forEach(id => {
      document.getElementById(id)?.addEventListener("input", () => {
        this.updateLiveListingPreview();
      });
    });

    // Preset photo buttons in Listing Studio
    document.querySelectorAll(".preset-photo-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.addPhotoToListing(btn.dataset.url);
      });
    });

    // Photo Drop Zone click
    const dropZone = document.getElementById("photo-drop-zone");
    const fileInput = document.getElementById("listing-file-input");
    if (dropZone && fileInput) {
      dropZone.addEventListener("click", () => fileInput.click());
      
      fileInput.addEventListener("change", (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
          if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (re) => {
              this.addPhotoToListing(re.target.result);
            };
            reader.readAsDataURL(file);
          }
        });
      });
    }

    // Listing form submit
    document.getElementById("listing-form")?.addEventListener("submit", (e) => {
      this.handlePublishListing(e);
    });

    document.getElementById("btn-cancel-listing")?.addEventListener("click", () => {
      this.switchView("browse");
    });

    // Owner Subtabs
    document.getElementById("subtab-requests-btn")?.addEventListener("click", () => {
      document.getElementById("subtab-requests-btn")?.classList.add("active");
      document.getElementById("subtab-listings-btn")?.classList.remove("active");
      document.getElementById("subtab-content-requests")?.classList.add("active");
      document.getElementById("subtab-content-listings")?.classList.remove("active");
    });

    document.getElementById("subtab-listings-btn")?.addEventListener("click", () => {
      document.getElementById("subtab-listings-btn")?.classList.add("active");
      document.getElementById("subtab-requests-btn")?.classList.remove("active");
      document.getElementById("subtab-content-listings")?.classList.add("active");
      document.getElementById("subtab-content-requests")?.classList.remove("active");
    });

    document.getElementById("btn-owner-create-new")?.addEventListener("click", () => {
      this.switchView("list");
    });

    // Renter status filter chips
    document.querySelectorAll(".filter-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.renderRenterBookings(chip.dataset.statusFilter);
      });
    });

    document.getElementById("btn-back-to-browse")?.addEventListener("click", () => {
      this.switchView("browse");
    });

    // Footer prototype links
    document.querySelectorAll(".footer-link[data-view]").forEach(link => {
      link.addEventListener("click", () => {
        this.switchView(link.dataset.view);
      });
    });

    // Reset Demo Data
    document.getElementById("btn-reset-demo-data")?.addEventListener("click", () => {
      if (confirm("Reset all RentKaro marketplace items, requests, and bookings back to initial seed data?")) {
        store.resetDemoData();
        this.renderMarketplace();
        this.renderOwnerDashboard();
        this.renderRenterBookings();
        this.updateBadges();
        showToast("Demo data successfully restored to fresh prototype state.", "success");
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  window.rentKaroApp = new RentKaroApp();
});
