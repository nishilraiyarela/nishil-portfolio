// The base URL must include the subfolder 'gallery'
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/nishilraiyarela/nishil-assets/main/gallery";

// Replace these numbers with your ACTUAL counts from the script
const PORTRAIT_COUNT = 14; 
const LANDSCAPE_COUNT = 10;

export const PORTRAITS = Array.from({ length: PORTRAIT_COUNT }, (_, i) => ({
  id: `p-${i + 1}`,
  url: `${GITHUB_RAW_BASE}/portrait/nishil_portrait_${i + 1}.jpg`,
  orientation: 'portrait'
}));

export const LANDSCAPES = Array.from({ length: LANDSCAPE_COUNT }, (_, i) => ({
  id: `l-${i + 1}`,
  url: `${GITHUB_RAW_BASE}/landscape/nishil_landscape_${i + 1}.jpg`,
  orientation: 'landscape'
}));