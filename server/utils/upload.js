import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';

const storage = new GridFsStorage({
    db: mongoose.connection,
    file: (request, file) => {
        const match = [
            'image/png',
            'image/jpg',
            'image/jpeg'
        ];

        if (!match.includes(file.mimetype)) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: 'fs',
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });