# 1. Install the necessary packages (only need to do this once)
#install.packages("webp")
#install.packages("png")

# 2. Load them
library(webp)
library(png)

# 3. Read the PNG
img <- readPNG("mybioportal_frontend/public/team/Jonafe_Daguplo_ClincalResearchCoordinator_v2.png")

# 4. Write to WebP at 50% quality
write_webp(img, "mybioportal_frontend/public/team/Jonafe_Daguplo_ClincalResearchCoordinator-scaled_v2.webp", quality = 50)
