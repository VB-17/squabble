function Key({ value, isBigKey, isDisabled}) {
  return (
    <div className="key" id={isBigKey ? "big" : isDisabled && "disabled"}>
      {value}
    </div>
  );
}

export default Key;
