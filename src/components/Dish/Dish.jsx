import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Ingredient } from "../Ingredient/Ingredient";

export const Dish = ({ name, ingredients = [] }) => {
  const [amount, setAmount] = useState(0);
  const isShowIngredients = !!(amount && ingredients.length);
  // не совсем понял почему const isShowIngredients перезаписывается при изменении amount, это же константа
  // или она каждый раз создается при новом рендере, когда срабатывает хук useState?
  return (
    <div>
      <div>
        {name}{" "}
        <Button
          onClick={() => setAmount(amount - 1)}
          disabled={amount <= 0}
          children="-"
        />{" "}
        {amount}{" "}
        <Button
          onClick={() => setAmount(amount + 1)}
          disabled={amount >= 6}
          children="+"
        />
      </div>

      {isShowIngredients && (
        <ul>
          {ingredients.map((ingredient) => (
            <li>
              <Ingredient name={ingredient} />
              {/*
              <Dish name={ingredient} />
              Можно переиспользовать Dish для ингредиентов, так как сейчас в Dish и Ingredient имеют одинаковая логика
              - Но так не правильно?
              - Можно ли создать универсальный компонет для Dish и Ingredients,
              или это тоже не правильно. Так как у этих компонентов может меняться логика?
              - может тогда лучше добавить компонент Counter?


              Попробовал вынести в отдельный компонент Counter, появилось больше вопросов, чем ответов:)
                Не стал зарываться, пока оставил как есть, жду вашего ревью

                P.S. При изменении кол-ва в одном ресторане, меняется для всех других, это из-за отсутствия ключей
              */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
