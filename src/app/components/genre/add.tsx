"use client";
import { genreCreate } from "@/lib/action";
import { useState } from "react";
import React from "react";

interface Genre {
  name: string;
}

const CreateGenreForm: React.FC = () => {
  const [genre, setGenre] = useState<Genre>({
    name: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    if (!genre.name.trim()) {
      setError("Genre name cannot be empty");
      return;
    }

    try {
      await genreCreate(genre);
      setSuccess("Genre created successfully");
      setError("");
    } catch (error) {
      setError("Failed to create genre");
      setSuccess("");
      console.error(error);
    } finally {
      setGenre({ name: "" });
      setTimeout(() => {
        setError("");
        setSuccess("");
        setLoading(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre({
      ...genre,
      [e.target.name]: e.target.value,
    });
    setError("");
    setSuccess("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">
          Create Genre
        </h2>

        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-gray-600 mb-2">
            Name:
          </label>
          <input
            id="name"
            name="name"
            value={genre.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="text"
            placeholder="Enter genre name"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 border border-blue-500 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mt-4 text-center">{success}</p>
        )}
      </form>
    </div>
  );
};

export default CreateGenreForm;
