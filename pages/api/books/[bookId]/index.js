import { deleteBook, getBook } from "../../../../lib/queryLib";

export default async function handler(req, res) {
    const { body, method } = req;
    const { bookId } = req.query;
  
    switch (method) {
      case 'DELETE': {
        // Update or create data in your database
        const book = await deleteBook(bookId);
        if(book)
            res.status(200).json(book);
        else
            res.status(404).json({error: 'deletion failed'});
        break
      }
      case 'GET': {
        // Update or create data in your database
        const book = await getBook(bookId);
        if(book)
            res.status(200).json(book);
        else
            res.status(404).json({error: 'get single book failed'});
        break
      }
      default:
        res.setHeader('Allow', ['DELETE', 'GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}