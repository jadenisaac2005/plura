import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
    generateUploadButton,
    generateUploadDropzone,
} from "@uploadthing/react";

import { generateReactHelpers } from "@uploadthing/react/hooks";

// export const { UploadButton, UploadDropzone, Uploader } =
//     generateComponents<OurFileRouter>();

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
