import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Replaces the unmaintained react-stars package.
// edit={false}: read-only display. edit={true}: clickable, calls onChange(n).
export default function Stars({
  value = 0,
  size = 24,
  edit = false,
  onChange,
  color = "#ffd700",
}) {
  const rating = Number(value) || 0;
  return (
    <span style={{ display: "inline-flex", gap: 2 }} aria-label={`Rating ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => {
        let Icon = FaRegStar;
        if (rating >= n) Icon = FaStar;
        else if (!edit && rating >= n - 0.5) Icon = FaStarHalfAlt;
        return (
          <Icon
            key={n}
            size={size}
            color={color}
            style={{ cursor: edit ? "pointer" : "default" }}
            onClick={edit && onChange ? () => onChange(n) : undefined}
          />
        );
      })}
    </span>
  );
}
