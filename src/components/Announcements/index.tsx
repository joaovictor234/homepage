import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Announcement } from "../../interface/Announcement";
import HomeBox from "../Box";
import EditableBox from "../EditableBox";
import { useStyles } from "./announcementsStyle";
import AnnouncementsContent from "./Content";
import AnnouncementsForm from "./Form";

interface IAnnouncements {
  admin: boolean;
}

const Announcements = ({ admin }: IAnnouncements) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [announcementsList, setAnnouncementsList] = useState<Announcement[]>([
    {
      id: v4(),
      title: "The standard Lorem Ipsum passage, used since the 1500s",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: v4(),
      title: "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    },
    {
      id: v4(),
      title: "Section 1.10.32 of 'de Finibus Bonorum et Malorum', written by Cicero in 45 BC",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    },
  ]);
  const [editMode, setEditMode] = useState(false);
  const [toggleModalForm, setToggleModalForm] = useState(false);

  useEffect(() => {
    if(!admin) {
      setEditMode(false);
      setToggleModalForm(false);
    }
  }, [admin]);

  const content = (
    <AnnouncementsContent
      index={index}
      setIndex={setIndex}
      editMode={editMode}
      announcementsList={announcementsList}
      setAnnouncementsList={setAnnouncementsList}
    />
  );

  return (
    <div className={classes.container}>
      {admin ? (
        <EditableBox
          title="Comunicados"
          editMode={editMode}
          setEditMode={setEditMode}
          toggleModalForm={toggleModalForm}
          setToggleModalForm={setToggleModalForm}
          list={announcementsList}
          setList={setAnnouncementsList}
          formChildren={
            <AnnouncementsForm
              setAnnouncementsList={setAnnouncementsList}
              setOpenModalForm={setToggleModalForm}
            />
          }
        >
          {content}
        </EditableBox>
      ) : (
        <HomeBox title="Você Sabia?">{content}</HomeBox>
      )}
    </div>
  );
};

export default Announcements;
