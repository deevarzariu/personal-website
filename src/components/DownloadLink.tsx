import "src/assets/styles/DownloadLink.css";

type Props = {
  title: string;
  link: string;
}

const DownloadLink = ({ title, link }: Props) => {
  return <a className="link" href={link} download>{title}</a>
}

export default DownloadLink;