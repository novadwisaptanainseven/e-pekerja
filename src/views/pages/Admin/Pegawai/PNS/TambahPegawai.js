import React, { useEffect, useState } from "react";
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

const TambahPegawai = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Pegawai</h3>
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
                {/* <CFormGroup row>
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
                </CFormGroup> */}
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
              </CCol>
              <CCol md="6">
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
                    <CInputFile
                      custom
                      name="foto"
                      id="custom-file-input"
                      onChange={(e) => onSelectFile(e)}
                    />
                    <CLabel
                      style={{ width: "353px", left: 15 }}
                      htmlFor="custom-file-input"
                      variant="custom-file"
                    >
                      Pilih Foto
                    </CLabel>
                    {preview && (
                      <img
                        src={preview}
                        alt={preview}
                        className="img-thumbnail mt-2 mb-1"
                        width={200}
                      />
                    )}
                    <CFormText className="help-block">
                      Foto harus bertipe jpg, jpeg, atau png dengan ukuran
                      kurang dari 2 MB
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <h4 style={{ fontWeight: "normal" }}>Masa Kerja Pegawai</h4>
                <hr />
                <CFormGroup row>
                  <CCol>
                    <CLabel>MK Jabatan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="mk_jabatan"
                      id="mk_jabatan"
                      placeholder="Masukkan masa kerja jabatan"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>MK Sebelum CPNS</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="mk_sebelum_cpns"
                      id="mk_sebelum_cpns"
                      placeholder="Masukkan masa kerja sebelum cpns"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>MK Golongan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="mk_golongan"
                      id="mk_golongan"
                      placeholder="Masukkan masa kerja golongan"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>MK Seluruhnya</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="mk_seluruhnya"
                      id="mk_seluruhnya"
                      placeholder="Masukkan masa kerja seluruhnya"
                      required
                    />
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
                    <CLabel>Jurusan</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="jurusan"
                      id="jurusan"
                      placeholder="Masukkan jurusan"
                      required
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol>
                    <CLabel>Tahun Lulus</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="tahun_lulus"
                      id="tahun_lulus"
                      placeholder="Masukkan tahun lulus"
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
                  <CLabel col>Foto/Scan Ijazah</CLabel>
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
                      File harus bertipe pdf, jpg, jpeg, atau png dengan ukuran
                      kurang dari 2 MB
                    </CFormText>
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" type="submit" className="mr-3">
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

export default TambahPegawai;
