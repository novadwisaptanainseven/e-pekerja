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
    let strIsiPesan = "";
    if (modal.data) {
      if (modal.data.status_cuti === "akan-cuti") {
        strIsiPesan = `Kepada Yth. Bpk ${
          modal.data.nama
        }, Anda akan cuti mulai tanggal ${format(
          new Date(modal.data.tgl_mulai),
          "dd/MM/y"
        )} s/d ${format(
          new Date(modal.data.tgl_selesai),
          "dd/MM/y"
        )} dengan jenis cuti ${modal.data.jenis_cuti}. Terimakasih`;
      } else if (modal.data.status_cuti === "sedang-cuti") {
        strIsiPesan = `Kepada Yth. Bpk ${
          modal.data.nama
        }, Anda sedang cuti sampai tanggal ${format(
          new Date(modal.data.tgl_selesai),
          "dd/MM/y"
        )}. Terimakasih`;
      } else if (modal.data.status_cuti === "masa-cuti-hampir-selesai") {
        strIsiPesan = `Kepada Yth. Bpk ${
          modal.data.nama
        }, Masa cuti Anda akan segera berakhir pada tanggal ${format(
          new Date(modal.data.tgl_selesai),
          "dd/MM/y"
        )}. Terimakasih`;
      } else if (modal.data.status_cuti === "masa-cuti-selesai") {
        strIsiPesan = `Kepada Yth. Bpk ${modal.data.nama}, Masa cuti Anda sudah berakhir. Terimakasih`;
      }

      setIsiPesan(strIsiPesan);
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
                <CTextarea name="pesan" rows={5} readOnly value={isiPesan} />
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
