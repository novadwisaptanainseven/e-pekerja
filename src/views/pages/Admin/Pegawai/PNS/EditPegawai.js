import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
  CSelect,
  CTextarea,
  CInputRadio,
  CInputFile,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditPegawai = ({ match }) => {
  const history = useHistory();
  const params = match.params;

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Pegawai : {params.id}</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm className="form-horizontal">
          <CCardBody>
            <CRow>
              <CCol md="6" sm="12">
                <CFormGroup row>
                  <CCol>
                    <CLabel>NIP</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="nip"
                      id="nip"
                      placeholder="Masukkan NIP"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Nama</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="nama"
                      id="nama"
                      placeholder="Masukkan nama"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Jabatan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="jabatan" id="jabatan">
                      <option value="0">-- Pilih Jabatan --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Sub Bidang</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="sub_bidang" id="sub_bidang">
                      <option value="0">-- Pilih Sub Bidang --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Golongan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect
                      custom
                      name="pangkat_golongan"
                      id="pangkat_golongan"
                    >
                      <option value="0">-- Pilih Golongan --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Eselon</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="pangkat_eselon" id="pangkat_eselon">
                      <option value="0">-- Pilih Eselon --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Status Pegawai</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="status_pegawai" id="status_pegawai">
                      <option value="0">-- Pilih Status Pegawai --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Agama</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="status_pegawai" id="status_pegawai">
                      <option value="0">-- Pilih Agama --</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Tempat Lahir</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      id="tempat_lahir"
                      name="tempat_lahir"
                      placeholder="Masukkan tempat lahir"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Tgl Lahir</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="date"
                      id="tgl_lahir"
                      name="tgl_lahir"
                      placeholder="Masukkan tanggal lahir"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Jenis Kelamin</CLabel>
                  </CCol>
                  <CCol sm="12" md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio
                        custom
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        value="Laki - Laki"
                      />
                      <CLabel variant="custom-checkbox" htmlFor="jenis_kelamin">
                        Laki - Laki
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio
                        custom
                        id="jenis_kelamin2"
                        name="jenis_kelamin"
                        value="perempuan"
                      />
                      <CLabel
                        variant="custom-checkbox"
                        htmlFor="jenis_kelamin2"
                      >
                        Perempuan
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CCol>
              <CCol md="6">
                <CFormGroup row>
                  <CCol>
                    <CLabel htmlFor="alamat">Alamat</CLabel>
                  </CCol>
                  <CCol sm="12" md="9">
                    <CTextarea
                      name="alamat"
                      id="alamat"
                      rows="5"
                      placeholder="Masukkan alamat"
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Karpeg</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="karpeg"
                      id="karpeg"
                      placeholder="Masukkan karpeg"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>BPJS</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="bpjs"
                      id="bpjs"
                      placeholder="Masukkan bpjs"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>NPWP</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="npwp"
                      id="npwp"
                      placeholder="Masukkan npwp"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>TMT. Golongan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="date"
                      name="tmt_golongan"
                      id="tmt_golongan"
                      placeholder="Masukkan tmt golongan"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>TMT. CPNS</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="date"
                      name="tmt_cpns"
                      id="tmt_cpns"
                      placeholder="Masukkan tmt cpns"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>TMT. Jabatan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="date"
                      name="tmt_jabatan"
                      id="tmt_jabatan"
                      placeholder="Masukkan tmt jabatan"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>No. HP</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="no_hp"
                      id="no_hp"
                      placeholder="Masukkan no hp"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col>Foto</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile custom id="custom-file-input" />
                    <CLabel
                      style={{ width: "353px", left: 15 }}
                      htmlFor="custom-file-input"
                      variant="custom-file"
                    >
                      Pilih Foto
                    </CLabel>
                    <CFormText className="help-block">
                      Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang
                      dari 2 MB
                    </CFormText>
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" type="submit" className="mr-1">
              Simpan
            </CButton>
            <CButton color="danger" type="reset" className="mr-1">
              Reset
            </CButton>
          </CCardFooter>
        </CForm>
      </CCard>
    </>
  );
};

export default EditPegawai;
