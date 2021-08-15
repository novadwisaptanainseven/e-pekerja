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
import { sendNotifByEmail } from "src/context/actions/KenaikanPangkat/sendNotifByEmail";
import LoadingSubmit from "src/reusable/LoadingSubmit";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const ModalGmail = ({ modal, setModal }) => {
  const [isiPesan, setIsiPesan] = useState("");
  const [loading, setLoading] = useState(false);

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

        setIsiPesan(str.replace(/\r?\n|\r/, "")); // Regext untuk menghilangkan linebreak
      }
    }

    return () => setIsiPesan("");
  }, [modal]);

  // Handle Kirim Email
  const kirimEmail = () => {
    let email = modal.data.email;
    let nama = modal.data.nama;
    let pesan = isiPesan;
    let val = {
      nama: nama,
      email: email,
      pesan: pesan,
    };

    // Sending an Email
    sendNotifByEmail(val, setLoading, Swal);
  };

  return (
    <div>
      <CModal
        show={modal.modal}
        onClose={() => setModal({ ...modal, modal: false })}
      >
        <CModalHeader closeButton>Kirim Pemberitahuan via GMAIL</CModalHeader>
        <CModalBody>
          {modal.data && (
            <>
              <CFormGroup>
                <CLabel>Email</CLabel>
                <CInput
                  type="text"
                  name="email"
                  value={modal.data.email}
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
          <CButton
            color="primary"
            onClick={kirimEmail}
            disabled={loading ? true : false}
          >
            {loading ? (
              <LoadingSubmit />
            ) : (
              <>
                Kirim <CIcon content={cilSend} />
              </>
            )}
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

export default ModalGmail;
