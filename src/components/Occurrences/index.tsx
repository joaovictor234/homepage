import { useEffect, useState } from "react";
import { Occurrence } from "../../interface/Occurrence";

import { v4 } from "uuid";
import EditableBox from "../EditableBox";
import OccurrencesForm from "./Form";
import HomeBox from "../Box";
import OccurrenceContent from "./Content";

interface IOccurrences {
  admin: boolean;
}

const date = new Date();
const date7Days = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
const date15Days = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 15);
const date30Days = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 30);

const Occurrences = ({ admin }: IOccurrences) => {
  const [editMode, setEditMode] = useState(false);
  const [occurrences, setOccurrences] = useState<Occurrence[]>([
    {
      id: v4(),
      title: "O serviço está desativado temporariamente",
      time: date,
      occurrenceType: "alert",
    },
    {
      id: v4(),
      title: "aviso",
      time: date,
      occurrenceType: "warning",
    },
    {
      id: v4(),
      title:
        "Informação",
      time: date,
      occurrenceType: "info",
    },
    {
      id: v4(),
      title: "alerta",
      time: date7Days,
      occurrenceType: "alerta",
    },
    {
      id: v4(),
      title: "Sistema SXXX está instável no momento.",
      time: date7Days,
      occurrenceType: "warning",
    },
    {
      id: v4(),
      title: "Novo sistema implantado",
      time: date7Days,
      occurrenceType: "info",
    },
    {
      id: v4(),
      title: "O sistema SXXX está inoperante neste momento",
      time: date15Days,
      occurrenceType: "alert",
    },
    {
      id: v4(),
      title: "info",
      time: date30Days,
      occurrenceType: "info",
    },
  ]);
  const [toggleModalForm, setToggleModalForm] = useState(false);

  useEffect(() => {
    if (!admin) {
      setEditMode(false);
      setToggleModalForm(false);
    }
  }, [admin]);

  let content = (
    <OccurrenceContent
      editMode={editMode}
      occurrences={occurrences}
      setOccurrences={setOccurrences}
    />
  );

  return (
    <div>
      {admin ? (
        <EditableBox
          title="Ocorrências"
          list={occurrences}
          setList={setOccurrences}
          editMode={editMode}
          setEditMode={setEditMode}
          toggleModalForm={toggleModalForm}
          setToggleModalForm={setToggleModalForm}
          formChildren={
            <OccurrencesForm
              setOccurrences={setOccurrences}
              setToggleModalForm={setToggleModalForm}
            />
          }
        >
          {content}
        </EditableBox>
      ) : (
        <HomeBox title="Ocorrências">{content}</HomeBox>
      )}
    </div>
  );
};

export default Occurrences;
