---
# Gallery section using the Blank widget and Gallery element (shortcode).
widget: blank  # See https://sourcethemes.com/academic/docs/page-builder/
headless: true  # This file represents a page section.
active: true  # Activate this widget? true/false
weight: 3

title: Sponsors
subtitle: Our research is supported by

design:
  spacing:
    padding: ["20px", "0", "0", "0"]

gallery_item:
  - album: gallery
    image: intel.png
    caption: Intel® AI
    href: "https://www.intel.com"
---

{{< gallery >}}
