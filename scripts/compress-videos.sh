#!/bin/bash
# Compress videos in the input directory to mp4 format
# Example: ./compress-videos.sh ./public/projects ./public/projects/compressed false

# Param 1: Input directory (default: ./)
# Param 2: Output directory (default: ./)
# Param 3: Delete originals (default: false)
INPUT_DIR="${1:-../public/img}"
OUTPUT_DIR="${2:-../public/img}"
DELETE_ORIGINALS="${3:-false}"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Input directory $INPUT_DIR does not exist"
    exit 1
fi

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "Error: ffmpeg is not installed"
    echo "Please install ffmpeg to use this script"
    exit 1
fi

# Supported video formats
SUPPORTED_FORMATS=("mp4" "mov" "avi" "mkv" "wmv" "flv" "webm" "m4v" "3gp" "mpg" "mpeg" "m2v" "mts" "m2ts")

# Function to get file extension
get_extension() {
    local filename="$1"
    echo "${filename##*.}" | tr '[:upper:]' '[:lower:]'
}

# Function to check if file is a supported video
is_supported_video() {
    local file="$1"
    local ext=$(get_extension "$file")
    
    for format in "${SUPPORTED_FORMATS[@]}"; do
        if [ "$ext" = "$format" ]; then
            return 0
        fi
    done
    return 1
}

echo "Processing videos in: $INPUT_DIR"
echo "Output directory: $OUTPUT_DIR"
echo "Delete originals: $DELETE_ORIGINALS"

for file in "$INPUT_DIR"/*; do
    # Skip if not a file or if it's a directory
    if [ ! -f "$file" ]; then
        continue
    fi

    filename=$(basename -- "$file")
    
    # Check if file is a supported video format
    if ! is_supported_video "$file"; then
        echo "Skipping $filename (unsupported video format)"
        continue
    fi

    echo "Processing $filename..."

    # Get filename without extension
    file_name="${filename%.*}"

    mkdir -p "$OUTPUT_DIR"
    
    # Optimized MP4 using x264 (older format)
    ffmpeg -i "$file" -vcodec libx264 -crf 28 -preset slow -movflags +faststart -pix_fmt yuv420p "$OUTPUT_DIR/$file_name.mp4"

    # Optimized MP4 using H.265 (HEVC)
    # Compresses more for same quality, but limitted browser support 
    # Increase CRF to compress further
    # ffmpeg -i "$file" -vcodec libx265 -crf 32 -preset slow -movflags +faststart -pix_fmt yuv420p "$OUTPUT_DIR/$file_name.mp4"

    # WebM version (optional)
    # ffmpeg -i "$file" -c:v libvpx-vp9 -b:v 0 -crf 32 "$OUTPUT_DIR/$file_name.webm"

    # Poster image
    #ffmpeg -i "$file" -ss 00:00:01.000 -vframes 1 "$OUTPUT_DIR/$file_name.jpg"

    # Delete original if requested
    if [ "$DELETE_ORIGINALS" = "true" ] || [ "$DELETE_ORIGINALS" = "1" ]; then
        echo "  Deleting original file"
        rm "$file"
    fi
    
    echo "  Completed: $filename -> ${file_name}.mp4"
    echo ""
done

echo "videos optimized"
