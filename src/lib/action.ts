
import axios from "axios";

export const API = "https://rest-api-for-crud-production.up.railway.app";

// Fungsi untuk mengambil buku
export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API}/book`);
    const books = response.data.sort(
      (a: any, b: any) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    );
    return { books, error: null };
  } catch (error) {
    console.error("Error fetching books:", error);
    return { books: [], error: "Error fetching books" };
  }
};

// Fungsi untuk mendapatkan dashboard
export const GetDashboard = async (query: string, genre: any) => {
  try {
    const result = await axios.get(`${API}/book/search`, {
      params: { query, genre },
    });
    return result.data;
  } catch (err) {
    console.error("Error fetching books:", err);
    return [];
  }
};

// Fungsi untuk mereset password
export const resetPassword = async (newPassword: string, token: string) => {
  try {
    const result = await axios.put(`${API}/password/reset`, {
      newPassword,
      token,
    });
    return result;
  } catch (error) {
    throw new Error("Failed to reset password");
  }
};

// Fungsi untuk mengirim token
export const sendToken = async (email: string) => {
  try {
    const result = await axios.post(`${API}/token/email`, { email });
    return result;
  } catch (err) {
    throw new Error("Failed to send email");
  }
};

// Fungsi untuk mendapatkan semua pengguna
export const GetAllUser = async () => {
  try {
    const response = await axios.get(`${API}/users/data`);
    return response;
  } catch (error) {
    throw new Error("Failed to get users");
  }
};

// Fungsi untuk registrasi pengguna
export const register = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API}/users/create`, formData);
    return response;
  } catch (err) {
    throw new Error("Failed to register");
  }
};

// Fungsi untuk menambahkan pengguna baru
export const addUser = async (formData: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API}/users/create`, formData);
    return response;
  } catch (err) {
    throw new Error("Failed to add user");
  }
};

// Fungsi untuk menghapus pengguna
export const deleteUser = async (userId: number) => {
  try {
    const result = await axios.delete(`${API}/users/${userId}`);
    return result;
  } catch (err) {
    throw new Error("Failed to delete user");
  }
};

// Fungsi untuk mendapatkan profil pengguna
export const getProfile = async (userId: number) => {
  try {
    const result = await axios.get(`${API}/users/${userId}`);
    return result;
  } catch (err) {
    throw new Error("Failed to get profile");
  }
};

// Fungsi untuk memperbarui profil
export const postProfile = async ({
  Id,
  avatar,
}: {
  Id: any;
  avatar: string;
}) => {
  try {
    const result = await axios.put(`${API}/profile/create`, {
      Id: Id,
      avatarUrl: avatar,
    });
    return result;
  } catch (err) {
    throw new Error("Failed to post profile");
  }
};

// Fungsi untuk memperbarui cover
export const postCover = async ({
  Id,
  coverUrl,
}: {
  Id: number;
  coverUrl: any;
}) => {
  try {
    const result = await axios.put(`${API}/profile/create`, {
      Id: Id,
      coverUrl: coverUrl,
    });
    return result;
  } catch (err) {
    throw new Error("Failed to update cover");
  }
};

// Fungsi untuk membuat genre
export const genreCreate = async (genre: any) => {
  try {
    const response = await axios.post(`${API}/genre/create`, genre);
    return response;
  } catch (err) {
    throw new Error("Failed to create genre");
  }
};

// Fungsi untuk mendapatkan bookmark pengguna
export const getBookMark = async (userId: any) => {
  try {
    const response = await axios.get(`${API}/bookmarsk/${userId}`);
    return response;
  } catch (err) {
    throw new Error("Failed to get bookmarks");
  }
};

// Fungsi untuk membuat chapter
export const chapterCreat = async (form: any) => {
  try {
    const response = await axios.post(`${API}/chapters/create`, form);
    return response;
  } catch (err) {
    throw new Error("Failed to create chapter");
  }
};

// Fungsi untuk menghapus bookmark
export const deleteBookMark = async (userId: any, bookId: any) => {
  try {
    const result = await axios.delete(`${API}/bookmark/delete/${userId}/${bookId}`);
    return result;
  } catch (err) {
    throw new Error("Failed to delete bookmark");
  }
};

// Fungsi untuk menghubungkan bookmark
export const bookMarkConect = async (userId: any, bookId: any) => {
  try {
    const response = await axios.post(`${API}/bookmark/create`, { userId, bookId });
    return response;
  } catch (err) {
    throw new Error("Failed to connect bookmark");
  }
};

// Fungsi untuk mendapatkan buku berdasarkan ID
export const getBookById = async (bookId: string) => {
  try {
    const result = await axios.get(`${API}/books/${bookId}`);
    return result;
  } catch (err) {
    throw new Error("Failed to get book");
  }
};

// Fungsi untuk mendapatkan semua genre
export const getAllGenre = async () => {
  try {
    const result = await axios.get(`${API}/genres`);
    return result;
  } catch (error) {
    throw new Error("Failed to get genres");
  }
};

// Fungsi untuk menghubungkan genre dengan buku
export const genreConect = async (bookId: string, selectedGenreIds: any) => {
  try {
    const result = await axios.post(`${API}/genre/conect`, {
      bookId,
      genreIds: Array.from(selectedGenreIds),
    });
    return result;
  } catch (error) {
    throw new Error("Failed to add genres.");
  }
};

// Fungsi untuk menghapus chapter
export const deletChapter = async (chapterId: string) => {
  try {
    const result = await axios.delete(`${API}/chapter/delete`, { data: { chapterId } });
    return result;
  } catch (err) {
    throw new Error("Failed to delete chapter.");
  }
};

// Fungsi untuk menghapus genre
export const deletGenre = async (bookId: any, genreId: any) => {
  try {
    await axios.put(`${API}/genre/disconect`, {
      bookId,
      genreId,
    });
  } catch (err) {
    throw new Error("Failed to delete genre.");
  }
};

// Fungsi untuk menambahkan buku
export const PostBook = async (form: any, imageUrl: any) => {
  try {
    const uploadBook = await axios.post(`${API}/book/Create`, {
      ...form,
      imageUrl,
    });
    return uploadBook;
  } catch (err) {
    throw new Error("Failed to add book.");
  }
};

// Fungsi untuk mengedit buku
export const editeBook = async (
  id: string,
  title: string,
  author: string,
  synopsis: string,
  imageUrl: string,
) => {
  try {
    const response = await axios.put(`${API}/book/edite`, {
      id,
      title,
      author,
      synopsis,
      imageUrl,
    });
    return response;
  } catch (err) {
    throw new Error("Failed to edit book.");
  }
};

// Fungsi untuk mengirim email
export const emailSend = async (formData: any) => {
  try {
    const result = await axios.post(`${API}/mail`, formData);
    return result;
  } catch (err) {
    throw new Error("Failed to send email.");
  }
};

export const isMark = async(userId:any, bookId:string)=>{
  try {
    const result = await axios.get(`${API}/isMark/${userId}/${bookId}`);
    return result;
  }catch(err){
    throw new Error("Failed to mark book");
  }
}
