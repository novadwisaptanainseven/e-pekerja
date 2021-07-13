import { format } from "date-fns";

const formatTanggal = (date) => {
  let day = format(new Date(date), "d");
  let month = format(new Date(date), "MMM");
  let year = format(new Date(date), "y");
  let bulan = "";

  switch (month) {
    case "Jan":
      bulan = "Januari";
      break;
    case "Feb":
      bulan = "Februari";
      break;
    case "Mar":
      bulan = "Maret";
      break;
    case "Apr":
      bulan = "April";
      break;
    case "May":
      bulan = "Mei";
      break;
    case "Jun":
      bulan = "Juni";
      break;
    case "Jul":
      bulan = "Juli";
      break;
    case "Aug":
      bulan = "Agustus";
      break;
    case "Sep":
      bulan = "September";
      break;
    case "Oct":
      bulan = "Oktober";
      break;
    case "Nov":
      bulan = "November";
      break;
    case "Dec":
      bulan = "Desember";
      break;

    default:
      break;
  }

  return `${day} ${bulan} ${year}`;
};

export default formatTanggal;
