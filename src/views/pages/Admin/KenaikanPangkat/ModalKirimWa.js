import { cilSend } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const ModalKirimWa = ({ modal, setModal }) => {
  const [isiPesan, setIsiPesan] = useState("");

  useEffect(() => {
    if (modal.data) {
      console.log(modal.data);
      if (modal.type === "pangkat-updated") {
        let str = `Kepada Yth. ${
          modal.data.nama
        }, pangkat Anda telah diperbarui menjadi ${
          modal.data.pangkat_baru
        } terhitung mulai tanggal ${format(
          new Date(modal.data.tanggal),
          "dd/MM/y"
        )}. Terimakasih`;

        setIsiPesan(str.replace(/\r?\n|\r/, "")); // Regex untuk menghilangkan linebreak
      } else if (modal.type === "akan-naik-pangkat") {
        let str = `Kepada Yth. ${
          modal.data.nama
        }, Anda akan mengalami kenaikan pangkat (${
          modal.data.jenis_kp
        }) pada tanggal ${format(
          new Date(modal.data.tanggal),
          "dd/MM/y"
        )}. Silahkan untuk melengkapi berkas - berkasnya. Terimakasih`;

        setIsiPesan(str.replace(/\r?\n|\r/, "")); // Regex untuk menghilangkan linebreak
      }
    }

    return () => setIsiPesan("");
  }, [modal]);

  const changePhoneNumberFormat = (value) => {
    let str = value.replace("0", "62");
    return str;
  };

  // Handle Kirim WA
  const kirimWA = () => {
    let noHp = changePhoneNumberFormat(modal.data.no_hp);
    let pesan = isiPesan;

    window.open(
      `https://api.whatsapp.com/send?phone=${noHp}&text=${pesan}`,
      `blank`
    );
  };

  return (
    <div>
      <CModal
        show={modal.modal}
        onClose={() => setModal({ ...modal, modal: false })}
      >
        <CModalHeader closeButton>
          Kirim Pemberitahuan via WhatsApp
        </CModalHeader>
        <CModalBody>
          {modal.data && (
            <>
              <CFormGroup>
                <CLabel>No. HP</CLabel>
                <CInput
                  type="text"
                  name="no_hp"
                  value={modal.data.no_hp}
                  readOnly
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel>Pesan</CLabel>
                <CTextarea
                  name="pesan"
                  rows={5}
                  onChange={(e) => setIsiPesan(e.target.value)}
                  value={isiPesan}
                />
              </CFormGroup>
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={kirimWA}>
            Kirim <CIcon content={cilSend} />
          </CButton>
          <CButton
            color="secondary"
            onClick={() => setModal({ ...modal, modal: false })}
          >
            Tutup
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default ModalKirimWa;
