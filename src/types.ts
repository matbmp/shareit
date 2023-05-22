interface User {
    username: string;
    email: string;
    profileImageUrl: string | null;
}
interface Section {
    id: number;
    name: string;
}
interface Post {
    id: number,
    title: string;
    content: string;
    imageUrl: string | null;
    author: User;
    section: Section;
    creationDate: Date;
    commentCount: number;
    likes: number;
}