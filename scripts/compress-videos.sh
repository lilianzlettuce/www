#!/bin/bash
INPUT_DIR="../raw_videos"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
    echo "Error: Input directory $INPUT_DIR does not exist"
    exit 1
fi

#mkdir -p "$OUTPUT_DIR"

for file in "$INPUT_DIR"/*; do
    # Skip if not a file or if it's a directory
    if [ ! -f "$file" ]; then
        continue
    fi

    filename=$(basename -- "$file")
    # Extract project name and image suffix using regex
    # Pattern: projectName_fileName.extension
    if [[ $filename =~ ^(.+)_(.*)\.([a-zA-Z]+)$ ]]; then
        echo "Processing $filename..."

        project_name="${BASH_REMATCH[1]}"
        file_name="${BASH_REMATCH[2]}"
        extension="${BASH_REMATCH[3]}"

        OUTPUT_DIR="../public/projects/$project_name"
        mkdir -p "$OUTPUT_DIR"
        
        # New filename with extension
        new_filename="${file_name}"
        
        # Optimized MP4 using x264 (older format)
        ffmpeg -i "$file" -vcodec libx264 -crf 28 -preset slow -movflags +faststart -pix_fmt yuv420p "$OUTPUT_DIR/$new_filename.mp4"

        # Optimized MP4 using H.265 (HEVC)
        # Compresses more for same quality, but limitted browser support 
        # Increase CRF to compress further
        # ffmpeg -i "$file" -vcodec libx265 -crf 32 -preset slow -movflags +faststart -pix_fmt yuv420p "$OUTPUT_DIR/$name.mp4"

        # WebM version (optional)
        # ffmpeg -i "$file" -c:v libvpx-vp9 -b:v 0 -crf 32 "$OUTPUT_DIR/$name.webm"

        # Poster image
        ffmpeg -i "$file" -ss 00:00:01.000 -vframes 1 "$OUTPUT_DIR/$new_filename.jpg"

    else
        echo "Skipping $filename (doesn't match expected pattern)"
    fi


    #name="${filename%.*}"

    

    
done

echo "videos optimized"
