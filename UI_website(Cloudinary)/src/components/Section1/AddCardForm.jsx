import { useState } from "react";

const emptyCard = {
  img: "",
  color: "#1d8c86",
  intro: "",
  tag: "New segment",
};

function AddCardForm({ onAddUser }) {
  const [card, setCard] = useState(emptyCard);
  const [isOpen, setIsOpen] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  function updateCard(event) {
    const { name, value } = event.target;
    setCard((currentCard) => ({ ...currentCard, [name]: value }));
  }

  async function uploadImage() {
    if (!imageFile) {
      throw new Error("Please choose an image first.");
    }

    // 1. Ask our backend for a signature
    const signatureResponse = await fetch(
      "http://localhost:5000/api/sign-upload",
    );

    if (!signatureResponse.ok) {
      throw new Error("Could not prepare the image upload.");
    }

    const { signature, timestamp } = await signatureResponse.json();

    // 2. Prepare the image for Cloudinary
    const data = new FormData();

    data.append("file", imageFile);
    data.append("api_key", "376353648244429");
    data.append("timestamp", timestamp);
    data.append("signature", signature);

    // 3. Upload directly to Cloudinary
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/gdxxdzid/image/upload",
      {
        method: "POST",
        body: data,
      },
    );

    const result = await response.json();

    console.log("Cloudinary response:", result);

    if (!response.ok || !result.secure_url) {
      throw new Error(result.error?.message ?? "Cloudinary rejected the image upload.");
    }

    return result.secure_url;
  }

  async function submitCard(event) {
    event.preventDefault();
    setUploadError("");
    setIsUploading(true);

    try {
      const imageUrl = await uploadImage();

      const newCard = {
        ...card,
        img: imageUrl,
      };

      onAddUser(newCard);

      setCard(emptyCard);
      setImageFile(null);
      setIsOpen(false);
    } catch (error) {
      console.error("Image upload failed:", error);
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="max-w-md">
      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="inline-flex items-center gap-2 rounded-full bg-[#1b1b1b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3d3d3d]"
      >
        <span className="text-lg leading-none">{isOpen ? "-" : "+"}</span>
        {isOpen ? "Close form" : "Add audience card"}
      </button>

      {isOpen && (
        <form
          onSubmit={submitCard}
          className="mt-4 grid gap-3 rounded-3xl bg-white/75 p-5 shadow-[0_12px_30px_rgba(0,0,0,0.07)]"
        >
          <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4b4b4b]">
            Upload image
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                setImageFile(event.target.files[0]);
                setUploadError("");
              }}
              required
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#1d8c86]"
            />
          </label>
          <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4b4b4b]">
            Segment label
            <input
              name="tag"
              value={card.tag}
              onChange={updateCard}
              required
              className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#1d8c86]"
            />
          </label>
          <label className="grid gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#4b4b4b]">
            Description
            <textarea
              name="intro"
              value={card.intro}
              onChange={updateCard}
              required
              rows="3"
              placeholder="Describe this customer segment"
              className="resize-none rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-normal normal-case tracking-normal outline-none focus:border-[#1d8c86]"
            />
          </label>
          <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-[#4b4b4b]">
            Accent color
            <input
              type="color"
              name="color"
              value={card.color}
              onChange={updateCard}
              className="h-9 w-14 cursor-pointer rounded-lg border-0 bg-transparent"
            />
          </label>
          <button
            type="submit"
            disabled={isUploading}
            className="mt-1 rounded-full bg-[#1d8c86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#146d69]"
          >
            {isUploading ? "Uploading..." : "Add card"}
          </button>
          {uploadError && (
            <p className="text-sm font-medium text-red-700" role="alert">
              {uploadError}
            </p>
          )}
        </form>
      )}
    </div>
  );
}

export default AddCardForm;
