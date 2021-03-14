import React from "react";

import { LoadAnimationWhite } from "src/assets";

import {
  CForm,
  CModalBody,
  CModalFooter,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CRow,
  CCol,
} from "@coreui/react";

const Form = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  modal,
  setModal,
  loading,
}) => {

  return (
    <>
      <CForm onSubmit={handleSubmit}>
        <CModalBody>
          <CFormGroup>
            <CLabel htmlFor="kantor">Kantor Lama</CLabel>
            <CInput
              type="text"
              id="kantor"
              placeholder="Masukkan kantor lama"
              name="kantor"
              value={values.kantor}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.kantor && touched.kantor ? "is-invalid" : null}
            />
            {errors.kantor && touched.kantor && (
              <div className="invalid-feedback">{errors.kantor}</div>
            )}
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="jabatan">Jabatan Lama</CLabel>
            <CInput
              type="text"
              id="jabatan"
              placeholder="Masukkan jabatan lama"
              name="jabatan"
              value={values.jabatan}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.jabatan && touched.jabatan ? "is-invalid" : null
              }
            />
            {errors.jabatan && touched.jabatan && (
              <div className="invalid-feedback">{errors.jabatan}</div>
            )}
          </CFormGroup>
          <CRow>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="tgl_masuk">Tgl. Masuk Kerja</CLabel>
                <CInput
                  type="date"
                  id="tgl_masuk"
                  placeholder="Masukkan tgl. masuk kerja"
                  name="tgl_masuk"
                  value={values.tgl_masuk}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.tgl_masuk && touched.tgl_masuk ? "is-invalid" : null
                  }
                />
                {errors.tgl_masuk && touched.tgl_masuk && (
                  <div className="invalid-feedback">{errors.tgl_masuk}</div>
                )}
              </CFormGroup>
            </CCol>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="tgl_keluar">Tgl. Keluar Kerja</CLabel>
                <CInput
                  type="date"
                  id="tgl_keluar"
                  placeholder="Masukkan tgl. keluar kerja"
                  name="tgl_keluar"
                  value={values.tgl_keluar}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.tgl_keluar && touched.tgl_keluar
                      ? "is-invalid"
                      : null
                  }
                />
                {errors.tgl_keluar && touched.tgl_keluar && (
                  <div className="invalid-feedback">{errors.tgl_keluar}</div>
                )}
              </CFormGroup>
            </CCol>
          </CRow>

          <CFormGroup>
            <CLabel htmlFor="keterangan">Keterangan</CLabel>
            <CInput
              type="keterangan"
              id="keterangan"
              placeholder="Masukkan keterangan"
              name="keterangan"
              value={values.keterangan}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.keterangan && touched.keterangan ? "is-invalid" : null
              }
            />
            {errors.keterangan && touched.keterangan && (
              <div className="invalid-feedback">{errors.keterangan}</div>
            )}
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton
            type="submit"
            color="primary"
            disabled={loading ? true : false}
          >
            {loading ? (
              <img width={21} src={LoadAnimationWhite} alt="load-animation" />
            ) : (
              "Simpan"
            )}
          </CButton>{" "}
          <CButton
            type="button"
            color="secondary"
            onClick={() => setModal(!modal)}
          >
            Batal
          </CButton>
        </CModalFooter>
      </CForm>
    </>
  );
};

export default Form;
