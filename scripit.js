// Initialize Campus Map
var map = L.map('campusMap').setView([28.6139, 77.2090], 16); // Example: Delhi campus

// Load OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Campus Locations with Energy Data
var locations = [
    {
        name: "Computer Lab",
        coords: [28.6145, 77.2095],
        usage: "⚠️ High Usage (40% extra)"
    },
    {
        name: "Library",
        coords: [28.6132, 77.2087],
        usage: "✅ Normal Usage"
    },
    {
        name: "Hostel Block A",
        coords: [28.6128, 77.2102],
        usage: "⚠️ Moderate Usage"
    },
    {
        name: "Admin Office",
        coords: [28.6140, 77.2108],
        usage: "✅ Optimized"
    }
];

// Add Markers
locations.forEach(loc => {
    L.marker(loc.coords)
        .addTo(map)
        .bindPopup(`<b>${loc.name}</b><br>${loc.usage}`);
});
