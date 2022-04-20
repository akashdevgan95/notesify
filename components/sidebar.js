import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Segment, Input } from "semantic-ui-react";

const Sidebar = ({ notes, setActiveNote }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    setFilteredNotes(notes);
  }, [notes]);

  const handleSearch = (e) => {
    const notesToShow = notes.filter(
      (note) =>
        note.title.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
    setFilteredNotes(notesToShow);
  };

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="sidebar">
      <Input
        icon="search"
        placeholder="Search..."
        className="w-full search-input varela"
        onChange={handleSearch}
      />
      {filteredNotes.length > 0 && (
        <Segment.Group>
          {filteredNotes.map(({ id, title, note }) => {
            return (
              <Segment
                key={title}
                className="cursor-pointer varela"
                onClick={() => setActiveNote({ title, note, id })}
              >
                {title}
              </Segment>
            );
          })}
        </Segment.Group>
      )}
      <Link href="/notes/new">
        <Button className="bg-green white varela w-full">ADD NEW NOTE</Button>
      </Link>
    </div>
  );
};

export default Sidebar;
