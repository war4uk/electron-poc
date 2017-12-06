var uploadService = null; 


export function initialize(files) {
    uploadService = UploadFileService.forPlugins(files);
    return uploadService;
}


export function getInstance() {
    return uploadService;
} 