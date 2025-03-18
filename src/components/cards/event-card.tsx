type EventCardProps = {
  title: string;       
  description: string;    
  category: string[];
} 
export default function EventCard({
    title , description , category
}: EventCardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
        
          {
            category.map ((cat,i)=>(
                <div key={i} className="badge badge-outline">{cat}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
