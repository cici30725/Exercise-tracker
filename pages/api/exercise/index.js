import { modifyExercise } from "../../../lib/queryLib";
import { z } from "zod";

export default async function handler(req, res) {
    const { body, method } = req

    const schema = z.object({
        exId: z.number().positive().int(),
        type: z.string(),
        checked: z.boolean()
    })

    const zRes = schema.safeParse(body);
    if(!zRes.success){
        const { errors } = zRes.error;
        return res.status(400).json({
            error: { message: "Invalid request", errors}
        });
    }

    const { exId, type, checked } = zRes.data;
  
    switch (method) {
      case 'PATCH': {
        // Get data from your database
        const ex = await modifyExercise(exId, type, checked);
        console.log(ex);
        res.status(200).json(ex);
        break
      }
      default:
        res.setHeader('Allow', ['PATCH'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}