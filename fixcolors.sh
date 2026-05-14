#!/bin/bash

# Ensure we only target .astro files in the src directory
TARGET_DIR="src"

echo "🎨 Scanning for legacy colors..."

# We use Perl for this because it handles regex lookaheads beautifully 
# and works identically on both Mac and Linux (unlike sed -i).

# 1. Update old 'brand-orange' -> 'brand-orange-mid' 
# (Ignores brand-orange-deep or brand-orange-mid)
find "$TARGET_DIR" -type f -name "*.astro" -exec perl -pi -e 's/\bbrand-orange\b(?!\-)/brand-orange-mid/g' {} +

# 2. Update old 'brand-cyan' -> 'brand-blue-deep'
find "$TARGET_DIR" -type f -name "*.astro" -exec perl -pi -e 's/\bbrand-cyan\b(?!\-)/brand-blue-deep/g' {} +

# 3. Update old 'brand-blue' -> 'brand-blue-deep'
find "$TARGET_DIR" -type f -name "*.astro" -exec perl -pi -e 's/\bbrand-blue\b(?!\-)/brand-blue-deep/g' {} +

# 4. Update old 'brand-green' -> 'brand-green-bright'
find "$TARGET_DIR" -type f -name "*.astro" -exec perl -pi -e 's/\bbrand-green\b(?!\-)/brand-green-bright/g' {} +

echo "✅ All legacy colors have been successfully migrated to the 2026 palette!"
echo "🧹 You can now delete this script by running: rm update-colors.sh"
