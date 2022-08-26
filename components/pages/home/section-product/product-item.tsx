import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconSquare from 'public/svg/icon-sandbox-red.svg';
import IconIdCard from 'public/svg/icon-id-card.svg';
import IconOCR from 'public/svg/icon-ocr.svg';
import IconOCRSimilarity from 'public/svg/icon-ocr-similarity.svg';
import IconFaceAnalyzer from 'public/svg/icon-face-analyzer.svg';
import IconFaceSimilarity from 'public/svg/icon-face-similarity.svg';
import IconMaskDetection from 'public/svg/icon-mask-detection.svg';
import IconOnCloud from 'public/svg/icon-on-cloud.svg';
import IconOnPremise from 'public/svg/icon-on-premise.svg';

const IconSetup = (name: string) => {
  switch (name) {
    case 'ocr':
      return <IconOCR />;
    case 'ocr-similarity':
      return <IconOCRSimilarity />;
    case 'face-analyzer':
      return <IconFaceAnalyzer />;
    case 'face-similarity':
      return <IconFaceSimilarity />;
    case 'mask-detection':
      return <IconMaskDetection />;
    case 'on-cloud':
      return <IconOnCloud />;
    case 'on-premise':
      return <IconOnPremise />;
    default:
      return <IconIdCard />;
  }
};

interface IFitur {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface IImage {
  url: string;
  width: number;
  height: number;
}

interface IProductItem {
  id: number;
  image: IImage;
  title: string;
  description: string;
  fitur: IFitur[];
}

interface IProduct {
  product: IProductItem;
}

const HomeProductItem: FC<IProduct> = ({ product }) => {
  const [active, setActive] = useState(1);

  return (
    <div key={product.id} className="col-4 md-col-6 sm-col-12">
      <div className="home-product__item">
        <div className="home-product__item-cotent">
          <Image
            src={product.image.url}
            alt={product.title}
            width={product.image.width}
            height={product.image.height}
          />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <IconFaceAnalyzer />
        </div>
        <div className="home-product__tab">
          <div className="home-product__tab-button">
            {product.fitur.map((fitur, index) => (
              <button
                key={fitur.id}
                className={active === index + 1 ? 'active' : ''}
                onClick={() => setActive(index + 1)}
              >
                {IconSetup(fitur.icon)}
              </button>
            ))}
          </div>

          {product.fitur.map((fitur, index) => (
            <div
              key={fitur.id}
              className={
                active === index + 1
                  ? 'home-product__tab-panel show'
                  : 'home-product__tab-panel hide'
              }
            >
              <h5>{fitur.title}</h5>
              <p>{fitur.description}</p>
            </div>
          ))}
        </div>

        <div className="home-product__link">
          <Link href="/#demo">
            <a className="button button--outline">
              <IconSquare />
              &nbsp; Try Service
            </a>
          </Link>
          <Link href="/contact-us">
            <a className="button">
              <IconSquare />
              &nbsp; Contact Us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProductItem;
