// pages/home/new.jsx
import Image from 'next/image';
import './new.css'; // Import the CSS file for styling

export default function Practice() {
  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ '--position': 1 }}>
          <Image src="/images/1.jpg" alt="Image 1" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 2 }}>
          <Image src="/images/2.webp" alt="Image 2" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 3 }}>
          <Image src="/images/20.jpeg" alt="Image 3" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 4 }}>
          <Image src="/images/21.jpeg" alt="Image 4" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 5 }}>
          <Image src="/images/22.jpeg" alt="Image 5" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 6 }}>
          <Image src="/images/1.jpg" alt="Image 6" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 7 }}>
          <Image src="/images/23.jpeg" alt="Image 7" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 8 }}>
          <Image src="/images/24.jpeg" alt="Image 8" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 9 }}>
          <Image src="/images/20.jpeg" alt="Image 9" width={250} height={250} />
        </div>
        <div className="item" style={{ '--position': 10 }}>
          <Image src="/images/2.webp" alt="Image 10" width={250} height={250} />
        </div>
      </div>
      <div className="content">
    

      <div className="model ">
        
      </div>
      </div>
    </div>
  );
}
