import "./Shoes.scss";
import { nanoid } from "nanoid";

import Input from "../Input/Input";

function Shoes({ updateSize, addShoe, removeShoe, shoes }) {
  const shoeComps = shoes.map((input, index) => {
    const label = `Shoe size / person ${index + 1}`;
    const shoeInput = (
      <article className="shoes__form" key={input.id}>
        <Input
          label={label}
          type="text"
          customClass="shoes__input"
          name={input.id}
          handleChange={updateSize}
          maxLength={2}
        />
        <button
          className="shoes__button shoes__button--small"
          onClick={() => {
            removeShoe(input.id);
          }}
        >
          -
        </button>
      </article>
    );

    return shoeInput;
  });

  return (
    <section className="shoes">
      <header>
        <h2 className="shoes__heading">Shoes</h2>
      </header>
      {shoeComps}
      <button
        className="shoes__button"
        onClick={() => {
          addShoe(nanoid());
        }}
      >
        +
      </button>
      <section className="shoes__summary" role="region" aria-label="Shoe Sizes Summary">
        <h3>Shoe Sizes Summary</h3>
        <ul>
        {shoes.map((shoe, index) => (
        <li key={shoe.id}>
        Person {index + 1}: {shoe.size || "Not selected"}
        </li>
    ))}
  </ul>
</section>

    </section>
  );
}

export default Shoes;
