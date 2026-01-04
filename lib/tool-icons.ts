import {
    FileText,
    FileImage,
    Image,
    FileSpreadsheet,
    FileType,
    Code,
    Braces,
    Lock,
    Unlock,
    Bookmark,
    Combine,
    Split,
    Minimize2,
    FileCode,
    ImagePlus,
    FileJson,
    FileEdit,
    FileDigit
} from "lucide-react"

export const toolIcons = {
    // PDF Hot Tools
    "/tools/merge-pdf": Combine,
    "/tools/split-pdf": Split,
    "/tools/compress-pdf": Minimize2,
    "/tools/edit-pdf": FileEdit,

    // PDF to Image
    "/tools/pdf-to-png": FileImage,
    "/tools/pdf-to-jpg": FileImage,
    "/tools/image-extractor": Image,

    // Convert to PDF
    "/tools/excel-to-pdf": FileSpreadsheet,
    "/tools/word-to-pdf": FileDigit,
    "/tools/pdf-to-word": FileDigit,
    "/tools/pdf-to-markdown": FileText,
    "/tools/pdf-to-text": FileText,
    "/tools/pdf-to-json": FileJson,
    "/tools/markdown-to-pdf": FileType,

    // Security
    "/tools/protect-pdf": Lock,
    "/tools/unlock-pdf": Unlock,

    // Image to PDF
    "/tools/jpg-to-pdf": ImagePlus,
    "/tools/png-to-pdf": ImagePlus,
    "/tools/heif-to-pdf": ImagePlus,

    // PDF Tools
    "/tools/pdf-bookmarks": Bookmark,
    "/tools/pdf-to-html": FileCode,
} as const
