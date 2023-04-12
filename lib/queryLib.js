const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


export async function getAllBooks() {
    try{
        const books = await prisma.book.findMany();
        await prisma.$disconnect()
        return books;
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
        return null;
    }
}

export async function createBook(bookName, author) {
    try{
        const book = await prisma.book.create({
            data: {
                bookName: bookName,
                author: author
            }
        });
        await prisma.$disconnect()
        console.log(book);
        return book;
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
    }
}

export async function deleteBook(id) {
    try{
        const book = await prisma.book.delete({
            where: {
                id: parseInt(id)
            }
        });
        await prisma.$disconnect()
        console.log(book);
        return book;
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
    }
}

// ---- Chapter ----
export async function createChapter(bookId, chapterTitle, chapterNum, numExercises) {
    try{
        const exerciseArr = [...Array(numExercises).keys()].map((num) => (
            {exerciseNum: num+1}
        ));
        const chapter = await prisma.chapter.create({
            data: {
                chapterTitle: chapterTitle,
                chapterNum: chapterNum,
                exercises: {
                    create: exerciseArr
                },
                book: {
                    connect: {id: parseInt(bookId)}
                }
            },
            include: {
                exercises: true
            }
        });
        await prisma.$disconnect()
        console.log(chapter);
        return chapter;
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
    }
}

export async function getBook(bookId) {
    try{
        const book = await prisma.book.findUnique({
            where: {
                id: parseInt(bookId)
            },
            include: {
                chapters: {
                    include: {
                        exercises: true
                    }
                }
            }
        });
        await prisma.$disconnect()
        return book;
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
        return null;
    }
}

export async function getAllChapters(bookId) {
    const book = await getBook(bookId);
    if(book)
        return book.chapters;
    else
        return null;
}


// ---- Exercise ----
export async function modifyExercise(exId, type, checked) {
    try{
        if(type == 'done'){
            const ex = await prisma.exercise.update({
                where: {
                    id: exId
                },
                data: {
                    done: checked
                }
            });
            await prisma.$disconnect()
            return ex;
        }
        else if(type=='star'){
            const ex = await prisma.exercise.update({
                where: {
                    id: exId
                },
                data: {
                    star: checked
                }
            });
            await prisma.$disconnect()
            return ex;
        }
        else{
            throw new Error('Unkown type:', type);
        }
    } catch(e) {
        console.error(e)
        await prisma.$disconnect()
        return null;
    }
}
