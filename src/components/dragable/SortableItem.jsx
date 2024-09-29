import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: '1rem',
    margin: '0.5rem',
    background: 'var(--box-background)',
    border: '1px solid var(--box-border)',
    borderRadius: '25px',
    boxShadow: '0 4px 10px var(--box-shadow)',
    cursor: 'grab',
    width: '100%',
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <li ref={setNodeRef} style={style} className="grid-card" {...attributes} {...listeners}>
      <p style={{ margin: 0, textAlign: 'center', color: 'var(--text-color)', fontSize: '1.25rem', fontWeight: 'bold' }}>
        {id}
      </p>
    </li>
  );
}
