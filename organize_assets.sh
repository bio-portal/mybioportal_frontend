#!/bin/bash

UPLOADS_DIR="public/uploads"

# Check if the directory exists before running
if [ ! -d "$UPLOADS_DIR" ]; then
  echo "❌ Could not find '$UPLOADS_DIR'. Make sure you are in the project root."
  exit 1
fi

# Create target directories
mkdir -p public/team public/logos public/news public/docs public/images

echo "Scanning and moving files..."
count=0

# Safely find and loop through all files (handles spaces in filenames perfectly)
while IFS= read -r -d '' file; do
  filename=$(basename "$file")
  # Convert to lowercase for easier string matching
  lowername=$(echo "$filename" | tr '[:upper:]' '[:lower:]')

  # Default fallback directory
  target_dir="public/images"

  # Categorization Logic
  if [[ "$lowername" == *.pdf ]]; then
    target_dir="public/docs"
  elif [[ "$lowername" == *investigator* || "$lowername" == *coordinator* || "$lowername" == *manager* || "$lowername" == *engineer* || "$lowername" == *epidemiologist* ]]; then
    target_dir="public/team"
  elif [[ "$lowername" == *logo* || "$lowername" == *roche* || "$lowername" == *fondation* || "$lowername" == *cerc* ]]; then
    target_dir="public/logos"
  elif [[ "$lowername" == *news* || "$lowername" == *insight* ]]; then
    target_dir="public/news"
  fi

  # Move the file to its new home
  mv "$file" "$target_dir/$filename"
  ((count++))
  echo "Moved: $filename -> $target_dir/"

done < <(find "$UPLOADS_DIR" -type f -print0)

echo -e "\n✅ Successfully moved $count files!"
echo "🧹 You can now safely delete the empty uploads folder by running: rm -rf public/uploads"
