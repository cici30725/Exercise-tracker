import { createChapter, getAllChapters } from "../../../../../lib/queryLib";
import { z } from "zod";

export default async function handler(req, res) {

    /*
        POST: /api/books/[bookId]/chapter 
    */
    const { body, method } = req
    const { bookId } = req.query;

    switch (method) {
        case 'GET': {
            const chapters = await getAllChapters(bookId);
            if(chapters)
                res.status(200).json(chapters);
            else
                res.status(400).json({error: 'Get all chapters failed'});
            break
        }
        case 'POST': {
            // Validate request body
            const schema = z.object({
                chapterTitle: z.string(),
                chapterNum: z.number().positive(),
                numExercises: z.number().positive()
            })

            const zRes = schema.safeParse(body);
            if(!zRes.success){
                const { errors } = zRes.error;
                return res.status(400).json({
                    error: { message: "Invalid request", errors}
                });
            }

            const { chapterTitle, chapterNum, numExercises } = zRes.data;

            // Update or create data in your database
            const chapter = await createChapter(bookId, chapterTitle, chapterNum, numExercises);
            if(chapter)
                res.status(200).json(chapter);
            else
                res.status(404).json({error: 'Insert Chapter Failed'});
            break
        }
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}