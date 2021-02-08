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

const TambahPTTB = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah PTTB</h3>
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
                <h4 style={{ fontWeight: "normal" }}>Data Pegawai</h4>
                <hr />
                <CFormGroup row>
                  <CCol>
                    <CLabel>NIK</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="nik"
                      id="nik"
                      placeholder="Masukkan nik"
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
                    <CLabel>Penetap SK</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="penetap_sk"
                      id="penetap_sk"
                      placeholder="Masukkan penetap sk"
                      required
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Tgl. Penetapan SK</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="date"
                      name="tgl_penetapan_sk"
                      id="tgl_penetapan_sk"
                      placeholder="Masukkan tgl. penetapan sk"
                      required
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>No. SK</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="no_sk"
                      id="no_sk"
                      placeholder="Masukkan no. sk"
                      required
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Kontrak Ke</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="number"
                      name="kontrak_ke"
                      id="kontrak_ke"
                      placeholder="Masukkan kontrak ke berapa"
                      required
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Tugas</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="tugas"
                      id="tugas"
                      placeholder="Masukkan tugas"
                      required
                    />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol>
                    <CLabel>Masa Kerja</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="masa_kerja"
                      id="masa_kerja"
                      placeholder="Masukkan masa kerja"
                      required
                    />
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
                      Foto harus bertipe jpg, jpeg, atau png dengan ukuran
                      kurang dari 2 MB
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <h4 style={{ fontWeight: "normal" }}>
                  Data Pendidikan Terakhir
                </h4>
                <hr />
                <CFormGroup row>
                  <CCol>
                    <CLabel>Nama Akademi</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="nama_akademi"
                      id="nama_akademi"
                      placeholder="Masukkan nama akademi"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Jenjang</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CSelect custom name="jenjang" id="jenjang">
                      <option value="">-- Pilih Jenjang --</option>
                      <option value="sd">SD</option>
                      <option value="smp">SMP</option>
                      <option value="sma/ma/smk">SMA/MA/SMK</option>
                      <option value="D3">D3</option>
                      <option value="D4">D4</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>No. Ijazah</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="no_ijazah"
                      id="no_ijazah"
                      placeholder="Masukkan no ijazah"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col>Foto Ijazah</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile name="foto_ijazah" id="foto_ijazah" custom />
                    <CLabel
                      style={{ width: "353px", left: 15 }}
                      htmlFor="foto_ijazah"
                      variant="custom-file"
                    >
                      Pilih Foto
                    </CLabel>
                    <CFormText className="help-block">
                      Foto harus bertipe jpg, jpeg, atau png dengan ukuran
                      kurang dari 2 MB
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

export default TambahPTTB;
