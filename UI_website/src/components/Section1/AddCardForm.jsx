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

  function updateCard(event) {
    const { name, value } = event.target;
    setCard((currentCard) => ({ ...currentCard, [name]: value }));
  }

  function submitCard(event) {
    event.preventDefault();
    onAddUser(card);
    setCard(emptyCard);
    setIsOpen(false);
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
            Image URL
            <input
              name="img"
              value={card.img}
              onChange={updateCard}
              placeholder="https://..."
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
            className="mt-1 rounded-full bg-[#1d8c86] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#146d69]"
          >
            Add card
          </button>
        </form>
      )}
    </div>
  );
}

export default AddCardForm;