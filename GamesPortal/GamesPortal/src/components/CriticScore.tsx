import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 85 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <>
      <Badge
        colorScheme={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="2px"
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
