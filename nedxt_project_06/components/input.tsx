import React, {useId} from "react";


function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  curencyDisabled = false,
})
{
  const amountId=useId()
  return (
    <>
      <label htmlFor={amountId}>{label}</label>
      <input
        type="number"
        value={amount}
        id={amountId}
        placeholder="number"
        disabled={amountDisabled}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
      />

      <div>
        <select
          id="currency"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={curencyDisabled}
        >
          {currencyOptions.map((option) => {
            return (
              <>
                <option key={option} value={option}>
                  {option}
                </option>
              </>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default Input;
