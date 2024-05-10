export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
    if(!file)return callback(new Error('File is empty'), false);
    const fileExtencion = file.mimetype.split('/')[1]
    const validExtencions = ['jpg','jpeg','png','gif']
    if(validExtencions.includes(fileExtencion)){
        return callback(null, true)
    }
    callback(null, true)
};
