export interface FrontMatter {
    title?: string;
    index?: number;
    publishTime?: string;
    tags?: string[];
}

export interface Blog {
    frontMatter: FrontMatter;
    content: string;
}

export interface Post {
    name: string;
    path: string;
    frontMatter: FrontMatter;
}

export interface BlogTable {
    tableName: string;
    blogList: Post[];
}
