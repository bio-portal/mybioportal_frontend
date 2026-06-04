# Install the magick package if you haven't already
# install.packages("magick")

library(magick)

# 1. Read the JPEG image
# Replace "input.jpg" with the path to your actual file
img <- image_read("public/team/Shirlyn_Cabilin_ClinicalResearchCoordinator.png")

# 2. Convert and save as WebP
# You can adjust the quality (0-100) if you want to compress it further
image_write(img, path = "public/team/Shirlyn_Cabilin_ClinicalResearchCoordinator.webp", format = "webp", quality = 50)

print("Conversion complete!")
