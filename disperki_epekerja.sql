-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 23, 2021 at 11:41 PM
-- Server version: 5.7.35
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `disperki_epekerja`
--

-- --------------------------------------------------------

--
-- Table structure for table `absensi`
--

CREATE TABLE `absensi` (
  `id_absensi` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `hari` varchar(10) NOT NULL,
  `absen` int(11) NOT NULL,
  `keterangan` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `agama`
--

CREATE TABLE `agama` (
  `id_agama` int(11) NOT NULL,
  `agama` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agama`
--

INSERT INTO `agama` (`id_agama`, `agama`) VALUES
(1, '-'),
(2, 'Islam\r'),
(3, 'Kristen Protestan\r'),
(4, 'Kristen Katolik\r'),
(5, 'Buddha\r'),
(6, 'Hindu\r'),
(7, 'Konghucu\r');

-- --------------------------------------------------------

--
-- Table structure for table `berkas_pegawai`
--

CREATE TABLE `berkas_pegawai` (
  `id_berkas` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `nama_berkas` varchar(255) NOT NULL,
  `tgl_upload` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bidang`
--

CREATE TABLE `bidang` (
  `id_bidang` int(11) NOT NULL,
  `nama_bidang` varchar(80) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bidang`
--

INSERT INTO `bidang` (`id_bidang`, `nama_bidang`, `keterangan`) VALUES
(1, '-\r', ''),
(2, 'Sekretariat\r', ''),
(3, 'Permukiman\r', ''),
(4, 'Perumahan\r', ''),
(5, 'Prasarana, Sarana, Utilitas Umum\r', '');

-- --------------------------------------------------------

--
-- Table structure for table `cuti`
--

CREATE TABLE `cuti` (
  `id_cuti` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `jenis_cuti` varchar(40) DEFAULT NULL,
  `lama_cuti` varchar(15) DEFAULT NULL,
  `keterangan` text NOT NULL,
  `tgl_mulai` date NOT NULL,
  `tgl_selesai` date NOT NULL,
  `status_cuti` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `diklat`
--

CREATE TABLE `diklat` (
  `id_diklat` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `jenis_diklat` varchar(40) NOT NULL,
  `nama_diklat` varchar(80) NOT NULL,
  `penyelenggara` varchar(80) NOT NULL,
  `tahun_diklat` varchar(6) NOT NULL,
  `jumlah_jam` int(11) NOT NULL,
  `dokumentasi` varchar(255) DEFAULT '',
  `sertifikat` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `duk_pegawai`
--

CREATE TABLE `duk_pegawai` (
  `id_duk` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `catatan_mutasi` varchar(100) NOT NULL DEFAULT '-'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `duk_pegawai`
--

INSERT INTO `duk_pegawai` (`id_duk`, `id_pegawai`, `catatan_mutasi`) VALUES
(1, 1, '-'),
(2, 2, '-'),
(3, 3, '-'),
(4, 4, '-'),
(5, 5, '-'),
(6, 6, '-'),
(7, 7, '-'),
(8, 8, '-'),
(9, 9, '-'),
(10, 10, '-'),
(11, 11, '-'),
(12, 12, '-'),
(13, 13, '-'),
(14, 14, '-'),
(15, 15, '-'),
(16, 16, '-'),
(17, 17, '-'),
(18, 18, '-'),
(19, 19, '-'),
(20, 20, '-'),
(21, 21, '-'),
(22, 22, '-'),
(23, 23, '-'),
(24, 24, '-'),
(25, 25, '-'),
(26, 26, '-'),
(27, 27, '-'),
(28, 28, '-'),
(29, 29, '-'),
(30, 30, '-'),
(31, 31, '-'),
(32, 32, '-'),
(33, 33, '-'),
(34, 34, '-'),
(35, 35, '-'),
(36, 36, '-'),
(37, 37, '-'),
(38, 38, '-'),
(39, 39, '-'),
(40, 40, '-'),
(41, 41, '-'),
(42, 42, '-'),
(43, 43, '-'),
(44, 44, '-'),
(45, 45, '-'),
(46, 46, '-'),
(47, 47, '-'),
(48, 48, '-'),
(49, 49, '-'),
(50, 50, '-'),
(51, 51, '-'),
(52, 52, '-'),
(53, 53, '-'),
(54, 54, '-'),
(55, 55, '-'),
(56, 56, '-'),
(57, 57, '-');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id_jabatan` int(11) NOT NULL,
  `nama_jabatan` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id_jabatan`, `nama_jabatan`) VALUES
(1, '-\r'),
(2, 'Kepala Dinas\r'),
(3, 'Sekretaris\r'),
(4, 'Kasubag Perencanaan Program Dan Keuangan\r'),
(5, 'Kasubag Umum Dan Kepegawaian\r'),
(6, 'Kepala Bidang Perumahan\r'),
(7, 'Kepala Bidang Kawasan Permukiman\r'),
(8, 'Kepala Bidang Prasarana, Sarana, Utilitas Umum\r'),
(9, 'Kasi Pendataan Dan Perencanaan Perumahan\r'),
(10, 'Kasi Penyediaan Dan Pembiayaan Perumahan\r'),
(11, 'Kasi Pemantauan Dan Evaluasi Perumahan\r'),
(12, 'Kasi Pendataan Dan Perencanaan Kawasan Permukiman\r'),
(13, 'Kasi Pencegahan Dan Peningkatan Kawasan Permukiman\r'),
(14, 'Kasi Pemantauan Dan Pengendalian Kawasan \r'),
(15, 'Kasi Pendataan Dan Perencanaan PSU\r'),
(16, 'Kasi Penyediaan Dan Pelaksanaan PSU\r'),
(17, 'Kasi Pemantauan Dan Evaluasi Pelaksana PSU\r'),
(18, 'Staf Subag Umum\r'),
(19, 'Staf Subag Kepegawaian\r'),
(20, 'Staf Subag Program\r'),
(21, 'Staf Subag Keuangan\r'),
(22, 'Staf Bagian Pendataan Dan Perencanaan Kawasan Permukiman\r'),
(23, 'Staf Bagian Pencegahan Dan Peningkatan Kawasan Permukiman\r'),
(24, 'Staf Bagian Pemantauan Dan Pengendalian Kawasan Permukiman\r'),
(25, 'Staf Bagian Pendataan Dan Perencanaan Perumahan\r'),
(26, 'Staf Bagian Penyediaan Dan Pembiayaan Perumahan\r'),
(27, 'Staf Bagian Pemantauan Dan Evaluasi Perumahan\r'),
(28, 'Staf Bagian Pendataan Dan Perencanaan PSU\r'),
(29, 'Staf Bagian Penyediaan Dan Pelaksanaan PSU\r'),
(30, 'Staf Bagian Pemantauan Dan Evaluasi Pelaksana PSU\r'),
(31, 'Surveyor Pencegahan Perumahan Dan Pemukiman Kumuh'),
(32, 'Tenaga Teknis Fungsional Lapangan\r'),
(33, 'Staf Administrasi\r'),
(34, 'Pengawas Pencegahan Perumahan Dan Permukiman Kumuh\r'),
(35, 'Pengelola Web Dinas'),
(36, 'Programmer'),
(37, 'Pengawas PJU'),
(38, 'Teknisi Listrik'),
(39, 'Security'),
(40, 'Wakar'),
(41, 'Wakar Makam'),
(42, 'Pekerja Lapangan Areal Makam'),
(43, 'Pengelola Jaringan'),
(44, 'Pengadministrasi Umum'),
(45, 'Pengawas Bangunan');

-- --------------------------------------------------------

--
-- Table structure for table `jenjang_pendidikan`
--

CREATE TABLE `jenjang_pendidikan` (
  `id_jenjang` int(11) NOT NULL,
  `jenjang` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jenjang_pendidikan`
--

INSERT INTO `jenjang_pendidikan` (`id_jenjang`, `jenjang`) VALUES
(1, '-'),
(2, 'SD'),
(3, 'SMP'),
(4, 'SMA/MA/SMK'),
(5, 'D3'),
(6, 'D4'),
(7, 'S1'),
(8, 'S2'),
(9, 'S3');

-- --------------------------------------------------------

--
-- Table structure for table `keluarga`
--

CREATE TABLE `keluarga` (
  `id_keluarga` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `id_agama` int(11) NOT NULL,
  `nik_nip` varchar(80) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `hubungan` varchar(40) NOT NULL,
  `pekerjaan` varchar(80) NOT NULL,
  `jenis_kelamin` varchar(20) NOT NULL,
  `tempat_lahir` varchar(50) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `alamat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `keluarga`
--

INSERT INTO `keluarga` (`id_keluarga`, `id_pegawai`, `id_agama`, `nik_nip`, `nama`, `hubungan`, `pekerjaan`, `jenis_kelamin`, `tempat_lahir`, `tgl_lahir`, `telepon`, `alamat`) VALUES
(1, 1, 2, '-', 'DRA. DIAH LESTARI AGUSTININGSI', 'Istri', 'KARYAWATI', 'Perempuan', '-', '1965-08-20', '-', '-'),
(2, 1, 2, '-', 'DINDA ASTTI NABILLA RAHMADANI', 'Anak Kandung', '-', 'Perempuan', '-', '2007-05-08', '-', '-'),
(3, 1, 2, '-', 'DANDI YUDHA NUGRAHA PRADANI', 'Anak Kandung', 'MAHASISWA', 'Laki-Laki', '-', '1989-08-15', '-', '-'),
(4, 1, 2, '-', 'DIAS ANANTA RISWANDANI', 'Anak Kandung', 'PELAJAR', 'Laki-Laki', '-', '1995-04-09', '-', '-'),
(5, 2, 2, '-', 'SITI JURIAH, SP', 'Istri', 'PNS', 'Perempuan', '-', '1964-08-01', '-', '-'),
(6, 2, 2, '-', 'IVA NILAWATI C.O', 'Anak Kandung', 'pelajar', 'Perempuan', '-', '1995-10-22', '-', '-'),
(7, 2, 2, '-', 'MUHAMMAD ANILA FATHURRAHMAN', 'Anak Kandung', 'Pelajar', 'Laki-Laki', '-', '1997-05-13', '-', '-'),
(8, 30, 2, '-', 'DELFI SURYANINGSIH, SE', 'Istri', 'PEGAWAI SWASTA', 'Perempuan', '-', '1982-12-12', '-', '-'),
(9, 9, 2, '-', 'Dwi Hariani,AMD', 'Istri', 'IRT', 'Perempuan', '-', '1997-04-30', '-', '-'),
(11, 9, 2, '-', 'Diva Silviana', 'Anak Kandung', '-', 'Perempuan', '-', '2007-01-30', '-', '-'),
(12, 35, 2, '-', 'SRI WINDA ASTUTI', 'Istri', 'IRT', 'Perempuan', '-', '0001-01-01', '-', '-'),
(13, 9, 2, '-', 'Daud Riyanto', 'Anak Kandung', 'Pelajar', 'Laki-Laki', '-', '2000-04-27', '-', '-'),
(14, 3, 2, '-', 'RIMA MAHYANI', 'Istri', 'IRT', 'Perempuan', '-', '1975-10-18', '-', '-'),
(15, 3, 2, '-', 'DINDA SALMAIDA', 'Anak Kandung', 'Pelajar', 'Perempuan', '-', '2002-09-18', '-', '-'),
(16, 3, 2, '-', 'RADITA RIZTY AKBAR', 'Anak Kandung', 'Pelajar', 'Laki-Laki', '-', '1999-10-08', '-', '-'),
(17, 3, 2, '-', 'NASHWAN DYO RAMADHAN', 'Anak Kandung', 'Anak ke-3', 'Laki-Laki', '-', '2009-08-27', '-', '-'),
(18, 17, 2, '-', 'Juminah', 'Istri', 'IRT', 'Perempuan', '-', '1082-05-15', '-', '-'),
(19, 17, 2, '-', 'Niswatul Lutfiah', 'Anak Kandung', '-', 'Perempuan', '-', '2008-11-20', '-', '-'),
(20, 11, 2, '-', 'EMIANTY', 'Istri', 'SWASTA', 'Perempuan', '-', '2003-05-16', '-', '-'),
(21, 11, 2, '-', 'MUHAMMAD SYAFII AZZAKY', 'Anak Kandung', 'BELUM SEKOLAH', 'Laki-Laki', '-', '2007-12-04', '-', '-'),
(22, 11, 2, '-', 'HANY SOFINA NAZHIFAH', 'Anak Kandung', 'PELAJAR', 'Perempuan', '-', '2004-02-18', '-', '-'),
(23, 20, 2, '-', 'Ermayanti', 'Istri', 'Ibu Rumah Tangga', 'Perempuan', '-', '1981-02-20', '-', '-'),
(24, 20, 2, '-', 'Faizah Maylova Widodo', 'Anak Kandung', 'Sekolah', 'Perempuan', '-', '2005-05-19', '-', '-'),
(25, 13, 2, '-', 'Ella Yuanita', 'Istri', 'SWASTA', 'Perempuan', '-', '1981-08-27', '-', '-'),
(26, 20, 2, '-', 'Kalina Al Kaiya Widodo', 'Anak Kandung', 'Sekolah', 'Perempuan', '-', '2011-05-10', '-', '-'),
(27, 13, 2, '-', 'RANDI ARMAN PRATAMA', 'Anak Kandung', 'BELUM BEKERJA', 'Laki-Laki', '-', '2003-06-08', '-', '-'),
(28, 13, 2, '-', 'Keisha Azzahra Nurul Fajr', 'Anak Kandung', 'Sekolah', 'Perempuan', '-', '2009-08-31', '-', '-'),
(29, 37, 2, '-', 'Mohammad Eri Nurianto,ST', 'Suami', 'Swasta', 'Laki-Laki', '-', '1977-04-20', '-', '-'),
(30, 25, 2, '-', 'Sulistyo Umoro', 'Suami', 'Swasta', 'Laki-Laki', '-', '1982-07-16', '-', '-'),
(31, 4, 2, '-', 'GT.PUSPA AGUSTINA', 'Istri', 'IRT', 'Perempuan', '-', '1966-08-09', '-', '-'),
(32, 4, 2, '-', 'ABIYYU PRABOWO', 'Anak Kandung', 'Pelajar', 'Laki-Laki', '-', '1990-08-04', '-', '-'),
(33, 4, 2, '-', 'DINA YONA K', 'Anak Kandung', 'Pelajar', 'Perempuan', '-', '1992-01-11', '-', '-'),
(34, 4, 2, '-', 'NEIFA PUTRI KARYONO', 'Anak Kandung', 'Sekolah', 'Perempuan', '-', '2008-06-06', '-', '-'),
(35, 41, 2, '-', 'Renny Hendriastiwi, SP', 'Istri', 'Wiraswasta', 'Perempuan', '-', '1987-01-24', '-', '-'),
(36, 43, 2, '-', 'WINDA DESVIRA', 'Istri', 'Pegawai Swasta', 'Perempuan', '-', '1990-12-30', '-', '-'),
(37, 43, 2, '6472030504170004', 'MUHAMMAD NAUFAL RAZIQ', 'Anak Kandung', '-', 'Laki-Laki', '-', '2017-04-21', '-', '-'),
(38, 45, 2, '-', 'SISKA OKTAVIANI, M.Pd', 'Istri', 'GURU HONORER', 'Perempuan', '-', '1991-10-25', '-', '-'),
(39, 46, 2, '-', 'ARIA TRIO MALVINAS', 'Suami', 'Swasta', 'Laki-Laki', '-', '1982-04-14', '-', '-'),
(40, 5, 2, '-', 'ERWIN', 'Ayah', 'SWASTA', 'Laki-Laki', '-', '1976-07-24', '-', '-'),
(41, 5, 2, '-', 'MUHAMMAD IMAM SYAFARDI', 'Anak Kandung', 'PELAJAR', 'Laki-Laki', '-', '2003-05-01', '-', '-'),
(42, 8, 2, '-', 'ERNY ESLLYAWATY', 'Istri', 'PNS', 'Perempuan', '-', '1970-01-21', '-', '-'),
(43, 8, 2, '-', 'M.ZEN NABIL ATHALLAH', 'Anak Kandung', 'Pelajar', 'Laki-Laki', '-', '2001-08-16', '-', '-'),
(44, 8, 2, '-', 'SALSABILA FADHILAH PUTRI', 'Anak Kandung', 'Anak ke-2', 'Perempuan', '-', '2005-06-10', '-', '-'),
(45, 12, 2, '-', 'ANI INDRAWATI, SE', 'Istri', 'IRT', 'Perempuan', '-', '1968-01-06', '-', '-'),
(46, 12, 2, '-', 'SYAHDA ALYSIA NATANI', 'Anak Kandung', 'PELAJAR', 'Perempuan', '-', '2004-08-31', '-', '-'),
(47, 12, 2, '-', 'SYAHDA ALYSIA NATANI', 'Anak Kandung', 'PELAJAR', 'Perempuan', '-', '1997-02-09', '-', '-'),
(48, 12, 2, '-', 'PAVITA ALMIRA NATANI', 'Anak Kandung', 'PELAJAR', 'Perempuan', '-', '1999-10-19', '-', '-'),
(49, 14, 2, '-', 'MAISYARAH', 'Istri', 'IRT', 'Perempuan', '-', '1977-08-19', '-', '-'),
(50, 14, 2, '-', 'ZALFA NAVISYA PUTRI', 'Anak Kandung', 'PELAJAR', 'Perempuan', '-', '2003-07-12', '-', '-'),
(51, 14, 2, '-', 'ZAFIRA AZZAHRA PUTRI', 'Anak Kandung', 'BELUM SEKOLAH', 'Perempuan', '-', '2006-03-26', '-', '-'),
(52, 48, 2, '-', 'ERI IWAN PRIYADI', 'Suami', '-', 'Laki-Laki', '-', '1979-11-16', '-', '-'),
(53, 50, 2, '-', 'KOMARI FEBRIYANTI', 'Istri', '-', 'Perempuan', '-', '1986-02-07', '-', '-'),
(54, 6, 2, '-', 'ARDIANSYAH D.', 'Ayah', 'Pensiunan PNS', 'Laki-Laki', '-', '1948-02-02', '-', '-');

-- --------------------------------------------------------

--
-- Table structure for table `kenaikan_pangkat`
--

CREATE TABLE `kenaikan_pangkat` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `id_golongan` int(11) DEFAULT NULL,
  `pangkat_baru` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tmt_kenaikan_pangkat` date DEFAULT NULL,
  `pejabat_penetap` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal` date DEFAULT NULL,
  `masa_kerja` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jenis_kp` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kenaikan_pangkat`
--

INSERT INTO `kenaikan_pangkat` (`id`, `id_pegawai`, `id_golongan`, `pangkat_baru`, `tmt_kenaikan_pangkat`, `pejabat_penetap`, `tanggal`, `masa_kerja`, `jenis_kp`, `file`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '2021-07-23 06:29:46'),
(2, 2, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(3, 3, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(4, 4, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(5, 5, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(6, 6, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(7, 7, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(8, 8, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(9, 9, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(10, 10, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(11, 11, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(12, 12, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(13, 13, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(14, 14, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(15, 15, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(16, 16, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(17, 17, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(18, 18, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(19, 19, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(20, 20, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(21, 21, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(22, 22, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(23, 23, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(24, 24, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(25, 25, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(26, 26, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(27, 27, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(28, 28, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(29, 29, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(30, 30, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(31, 31, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(32, 32, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(33, 33, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(34, 34, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(35, 35, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(36, 36, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(37, 37, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(38, 38, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(39, 39, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(40, 40, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(41, 41, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(42, 42, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(43, 43, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(44, 44, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(45, 45, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(46, 46, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(47, 47, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(48, 48, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(49, 49, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(50, 50, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(51, 51, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(52, 52, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(53, 53, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(54, 54, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(55, 55, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(56, 56, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00'),
(57, 57, NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-11 08:29:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `kgb`
--

CREATE TABLE `kgb` (
  `id_kgb` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `gaji_pokok_lama` int(11) NOT NULL,
  `gaji_pokok_baru` int(11) NOT NULL,
  `tmt_kenaikan_gaji` date NOT NULL,
  `peraturan` varchar(40) NOT NULL,
  `status_kgb` int(1) DEFAULT NULL,
  `kenaikan_gaji_yad` date NOT NULL,
  `no_sk` varchar(80) DEFAULT NULL,
  `tgl_sk` date DEFAULT NULL,
  `pejabat_penetap` varchar(100) DEFAULT NULL,
  `id_golongan` int(11) DEFAULT NULL,
  `mk_golongan` varchar(80) DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `masa_kerja_pegawai`
--

CREATE TABLE `masa_kerja_pegawai` (
  `id_masa_kerja` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `mk_jabatan` varchar(40) NOT NULL,
  `mk_sebelum_cpns` varchar(40) NOT NULL,
  `mk_golongan` varchar(40) NOT NULL,
  `mk_seluruhnya` varchar(40) NOT NULL,
  `total_mkg_hari` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `masa_kerja_pegawai`
--

INSERT INTO `masa_kerja_pegawai` (`id_masa_kerja`, `id_pegawai`, `mk_jabatan`, `mk_sebelum_cpns`, `mk_golongan`, `mk_seluruhnya`, `total_mkg_hari`, `updated_at`) VALUES
(1, 1, '4 Tahun 0 Bulan', '0 Tahun 0 Bulan', '21 Tahun 3 Bulan', '27 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(2, 2, '3 Tahun 11 Bulan', '6 Tahun 7 Bulan', '30 Tahun 2 Bulan', '35 Tahun 4 Bulan', 0, '2021-07-11 08:29:17'),
(3, 3, '1 Tahun 10 Bulan', '0 Tahun 0 Bulan', '16 Tahun 4 Bulan', '19 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(4, 4, '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '17 Tahun 10 Bulan', '27 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(5, 5, '1 Tahun 8 Bulan', '0 Tahun 0 Bulan', '16 Tahun 4 Bulan', '19 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(6, 6, '0 Tahun 0 Bulan', '3 Tahun 1 Bulan', '15 Tahun 3 Bulan', '15 Tahun 5 Bulan', 0, '2021-07-11 08:29:17'),
(7, 7, '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '13 Tahun 1 Bulan', '24 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(8, 8, '3 Tahun 0 Bulan', '0 Tahun 0 Bulan', '18 Tahun 2 Bulan', '32 Tahun 3 Bulan', 0, '2021-07-11 08:29:17'),
(9, 9, '1 Tahun 4 Bulan', '0 Tahun 0 Bulan', '7 Tahun 7 Bulan', '22 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(10, 10, '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '12 Tahun 11 Bulan', '19 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(11, 11, ' 3 Tahun 0 Bulan', '0 Tahun 0 Bulan', '12 Tahun 4 Bulan', '19 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(12, 12, '3 Tahun 10 Bulan', '0 Tahun 8 Bulan', '21 Tahun 1 Bulan', '32 Tahun 3 Bulan', 0, '2021-07-11 08:29:17'),
(13, 13, '1 Tahun 1 Bulan', '0 Tahun 0 Bulan', '12 Tahun 0 Bulan', '14 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(14, 14, '3 Tahun 10 Bulan', '4 Tahun 8 Bulan', '15 Tahun 5 Bulan', '22 Tahun 1 Bulan', 0, '2021-07-11 08:29:17'),
(15, 15, '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '22 Tahun 7 Bulan', '24 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(16, 16, '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '10 Tahun 6 Bulan', '11 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(17, 17, '0 Tahun 0 Bulan', '7 Tahun 0 Bulan', '13 Tahun 3 Bulan', '19 Tahun  11 Bulan', 0, '2021-07-11 08:29:17'),
(18, 18, '0 Tahun 0 Bulan', '5 Tahun 0 Bulan', '15 Tahun 3 Bulan', '0 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(19, 19, '0 Tahun 0 Bulan', '6 Tahun 5 Bulan', '14 Tahun 8 Bulan', '17 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(20, 20, '0 Tahun 0 Bulan', '3 Tahun 8 Bulan', '4 Tahun 4 Bulan', '17 Tahun 6 Bulan', 0, '2021-07-11 08:29:17'),
(21, 21, '0 Tahun 0 Bulan', '5 Tahun 0 Bulan', '13 Tahun 3 Bulan', '15 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(22, 22, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '8 Tahun 8 Bulan', '15 Tahun 10 Bulan', 0, '2021-07-11 08:29:17'),
(23, 23, '0 Tahun 0 Bulan', '8 Tahun 7 Bulan', '15 Tahun 11 Bulan', '11 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(24, 24, '0 Tahun 0 Bulan', '7 Tahun 9 Bulan', '15 Tahun 6 Bulan', '21 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(25, 25, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '16 Tahun 2 Bulan', '15 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(26, 26, '0 Tahun 0 Bulan', '6 Tahun 5 Bulan', '14 Tahun 8 Bulan', '17 Tahun 4 Bulan', 0, '2021-07-11 08:29:17'),
(27, 27, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '12 Tahun 2 Bulan', '15 Tahun 10 Bulan', 0, '2021-07-11 08:29:17'),
(28, 28, '0 Tahun 0 Bulan', '6 Tahun 11 Bulan', '16 Tahun 6 Bulan', '21 Tahun 2 Bulan', 0, '2021-07-11 08:29:17'),
(29, 29, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(30, 30, '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '10 Tahun 5 Bulan', '17 Tahun 2 Bulan', 0, '2021-07-11 08:29:17'),
(31, 31, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '4 Tahun 7 Bulan', '5 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(32, 32, '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '7 Tahun 9 Bulan', '13 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(33, 33, '0 Tahun 0 Bulan', '6 Tahun 9 Bulan', '19 Tahun 6 Bulan', '20 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(34, 34, '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '11 Tahun 0 Bulan', '19 Tahun 10 Bulan', 0, '2021-07-11 08:29:17'),
(35, 35, '0 Tahun 0 Bulan', '5 Tahun 3 Bulan', '9 Tahun 6 Bulan', '17 Tahun 2 Bulan', 0, '2021-07-11 08:29:17'),
(36, 36, '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '17 Tahun 11 Bulan', '25 Tahun 6 Bulan', 0, '2021-07-11 08:29:17'),
(37, 37, '0 Tahun 0 Bulan', '6 Tahun 4 Bulan', '14 Tahun 7 Bulan', '17 Tahun 3 Bulan', 0, '2021-07-11 08:29:17'),
(38, 38, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '9 Tahun 2 Bulan', '15 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(39, 39, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', 0, '2021-07-11 08:29:17'),
(40, 40, '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '13 Tahun 11 Bulan', '20 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(41, 41, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '4 Tahun 7 Bulan', '5 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(42, 42, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '4 Tahun 7 Bulan', '5 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(43, 43, '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '7 Tahun 9 Bulan', '13 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(44, 44, '0 Tahun 0 Bulan', '5 Tahun 7 Bulan', '17 Tahun 11 Bulan', '18 Tahun 6 Bulan', 0, '2021-07-11 08:29:17'),
(45, 45, '0 Tahun 0 Bulan', '11 Tahun 1 Bulan', '14 Tahun 9 Bulan', '15 Tahun 5 Bulan', 0, '2021-07-11 08:29:17'),
(46, 46, '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '11 Tahun 7 Bulan', '14 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(47, 47, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '12 Tahun 0 Bulan', '17 Tahun 3 Bulan', 0, '2021-07-11 08:29:17'),
(48, 48, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '7 Tahun 9 Bulan', '10 Tahun 11 Bulan', 0, '2021-07-11 08:29:17'),
(49, 49, '0 Tahun 0 Bulan', '0 Tahun 9 Bulan', '15 Tahun 10 Bulan', '36 Tahun 5 Bulan', 0, '2021-07-11 08:29:17'),
(50, 50, '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '9 Tahun 6 Bulan', '20 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(51, 51, '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '14 Tahun 11 Bulan', '20 Tahun 7 Bulan', 0, '2021-07-11 08:29:17'),
(52, 52, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '12 Tahun 0 Bulan', '14 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(53, 53, '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '14 Tahun 4 Bulan', '17 Tahun 6 Bulan', 0, '2021-07-11 08:29:17'),
(54, 54, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '5 Tahun 7 Bulan', '15 Tahun 9 Bulan', 0, '2021-07-11 08:29:17'),
(55, 55, '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '9 Tahun 11 Bulan', '17 Tahun 7Bulan', 0, '2021-07-11 08:29:17'),
(56, 56, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '11 Tahun 6 Bulan', '14 Tahun 8 Bulan', 0, '2021-07-11 08:29:17'),
(57, 57, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '9 Tahun 11 Bulan', '15 Tahun 7 Bulan', 0, '2021-07-11 08:29:17');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_06_29_064358_create_mutasi_table', 2),
(6, '2021_06_30_125131_create_kenaikan_pangkat_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `mutasi`
--

CREATE TABLE `mutasi` (
  `id_mutasi` int(10) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `tgl_mutasi` date NOT NULL,
  `keterangan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pangkat_eselon`
--

CREATE TABLE `pangkat_eselon` (
  `id_pangkat_eselon` int(11) NOT NULL,
  `eselon` varchar(5) NOT NULL,
  `keterangan` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pangkat_eselon`
--

INSERT INTO `pangkat_eselon` (`id_pangkat_eselon`, `eselon`, `keterangan`) VALUES
(1, '-\r', NULL),
(2, 'IVb\r', NULL),
(3, 'IVa\r', NULL),
(4, 'IIIb\r', NULL),
(5, 'IIIa\r', NULL),
(6, 'IIb\r', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pangkat_golongan`
--

CREATE TABLE `pangkat_golongan` (
  `id_pangkat_golongan` int(11) NOT NULL,
  `golongan` varchar(5) NOT NULL,
  `keterangan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pangkat_golongan`
--

INSERT INTO `pangkat_golongan` (`id_pangkat_golongan`, `golongan`, `keterangan`) VALUES
(1, '-', '-\r'),
(2, 'IV/e', 'Pembina Utama\r'),
(3, 'IV/d', 'Pembina Utama Madya\r'),
(4, 'IV/c', 'Pembina Utama Muda\r'),
(5, 'IV/b', 'Pembina Tingkat 1\r'),
(6, 'IV/a', 'Pembina\r'),
(7, 'III/d', 'Penata Tingkat 1\r'),
(8, 'III/c', 'Penata\r'),
(9, 'III/b', 'Penata Muda Tingkat 1\r'),
(10, 'III/a', 'Penata Muda\r'),
(11, 'II/d', 'Pengatur Tingkat 1\r'),
(12, 'II/c', 'Pengatur\r'),
(13, 'II/b', 'Pengatur Muda Tingkat 1\r'),
(14, 'II/a', 'Pengatur Muda\r'),
(15, 'I/d', 'Juru Tingkat 1\r'),
(16, 'I/c', 'Juru\r'),
(17, 'I/b', 'Juru Muda Tingkat 1\r'),
(18, 'I/a', 'Juru Muda\r');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pegawai`
--

CREATE TABLE `pegawai` (
  `id_pegawai` int(11) NOT NULL,
  `id_bidang` int(11) DEFAULT NULL,
  `id_status_pegawai` int(11) NOT NULL,
  `id_jabatan` int(11) DEFAULT NULL,
  `id_golongan` int(11) DEFAULT NULL,
  `id_eselon` int(11) DEFAULT NULL,
  `id_agama` int(11) NOT NULL,
  `nip` varchar(50) DEFAULT NULL,
  `nama` varchar(80) NOT NULL,
  `alamat` text NOT NULL,
  `tempat_lahir` varchar(60) NOT NULL,
  `tgl_lahir` date NOT NULL,
  `jenis_kelamin` varchar(15) NOT NULL,
  `karpeg` varchar(50) DEFAULT NULL,
  `bpjs` varchar(50) DEFAULT NULL,
  `npwp` varchar(50) DEFAULT NULL,
  `tmt_golongan` date DEFAULT NULL,
  `tmt_cpns` date DEFAULT NULL,
  `tmt_jabatan` date DEFAULT NULL,
  `no_hp` varchar(15) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `no_ktp` varchar(100) DEFAULT NULL,
  `gaji_pokok` int(11) NOT NULL DEFAULT '0',
  `foto` varchar(255) NOT NULL,
  `status_kerja` varchar(40) NOT NULL DEFAULT 'aktif',
  `id_user` int(11) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pegawai`
--

INSERT INTO `pegawai` (`id_pegawai`, `id_bidang`, `id_status_pegawai`, `id_jabatan`, `id_golongan`, `id_eselon`, `id_agama`, `nip`, `nama`, `alamat`, `tempat_lahir`, `tgl_lahir`, `jenis_kelamin`, `karpeg`, `bpjs`, `npwp`, `tmt_golongan`, `tmt_cpns`, `tmt_jabatan`, `no_hp`, `email`, `no_ktp`, `gaji_pokok`, `foto`, `status_kerja`, `id_user`, `updated_at`) VALUES
(1, 1, 1, 2, 4, 6, 2, '19651127 199301 1 001', 'Ir. H. Dadang Airlangga Nopandani, MMT', 'Jl. Kemangi Griya Tepian Blok EE No.13', 'Sebulu', '1965-11-27', 'Laki-Laki', 'F.358100', '0000120319852', '-', '1994-05-01', '1993-01-01', '2019-04-01', '081226888113', 'airlangga2711@gmail.com', '6472062711650001', 5105300, 'images/foto/97441625994178-196511271993011001.jpg', 'aktif', NULL, '2021-07-23 06:29:46'),
(2, 1, 1, 3, 5, 5, 2, '19640315 199203 1 014', 'H. Akhmad Husen, ST, MT', 'Jl. H.Adam Malik Perum Citra Griya D-13 RT.26', 'Samboja', '1964-03-15', 'Laki-Laki', 'F.309742', '0009063781222', '-', '2020-10-01', '1992-03-01', '2019-02-01', '08115930030', 'huseindbmp.ah@gmail.com', '6472061503640000', 0, 'images/foto/78501625994178-196403151992031014.jpg', 'aktif', NULL, NULL),
(3, 4, 1, 6, 6, 4, 2, '19721227 200112 1 004', 'H. Haimi Tauvani, ST, MM', 'Jl. Jakarta Blok CT.17 RT.74', 'Kandangan', '1972-12-27', 'Laki-Laki', 'L.028481', '-', '-', '2018-04-01', '2001-12-01', '2019-02-01', '08125819659', 'haimitauvani@gmail.com', '6472065712720001', 2982000, 'images/foto/81781625994178-197212272001121004.jpg', 'aktif', NULL, NULL),
(4, 3, 1, 7, 6, 4, 2, '19660425 199312 1 001', 'Joko Karyono, ST, MT', 'Jl. P. Antasari Gg.Ii Perum Permata Hijau A-5 RT.26', 'Ngawen', '1966-04-25', 'Laki-Laki', 'G.196525', '0000120320228', '-', '1995-10-01', '1993-12-01', '2019-08-16', '085347910889', 'karyonojoko66@gmail.com', '6472032504660001', 0, 'images/foto/14391625994178-196604251993121001.jpg', 'aktif', NULL, NULL),
(5, 5, 1, 8, 6, 4, 2, '19751105 200112 2 003', 'Neneng Chamelia Shanti, ST, MT, Msi', 'Jl. Sejahtera Iv Komplek Pemda No.56 RT.01 Kel.Temindung Permai', 'Samarinda', '1975-11-05', 'Perempuan', 'L. 028486', '0000120363884', '-', '2018-04-01', '2001-12-01', '2003-04-01', '0811554456', 'nenengchameliashanti@gmail.com', '6472054511750003', 2982000, 'images/foto/50651625994178-197511052001122003.jpg', 'aktif', NULL, NULL),
(6, 3, 1, 14, 7, 3, 2, '19740613 200502 1 003', 'M. Bahtiar, ST', 'Jl. Poros Lampake RT.6 No. 49', 'Muara Ancalong', '1974-06-13', 'Laki-Laki', 'M.098539', '0000120476801', '-', '2017-04-01', '2005-02-01', '2019-08-16', '081125517159', 'mbahtiar54@yahoo.com', '6472051306740008', 0, 'images/foto/57281625994178-197406132005021003.jpg', 'aktif', NULL, NULL),
(7, 3, 1, 13, 6, 3, 2, '19700829 199604 2 001', 'Narulita Haidinawati Ibay, ST, Msi', 'Jl. Sempaja Lestari Indah IV Blok J/17', 'Samarinda', '1970-08-29', 'Perempuan', 'G304411', '-', '-', '1970-01-01', '1996-04-01', '1970-01-01', '081350605260', 'narulitahaidi@gmail.com', '-', 0, 'images/foto/61281625994178-null.png', 'aktif', NULL, NULL),
(8, 5, 1, 16, 11, 3, 2, '19710816 199402 1 003', 'Syaiful Anwar, ST, MM', 'Jl. Jakarta Blok FG.21', 'Samarinda', '1971-08-16', 'Laki-Laki', 'G.114344', '0000120364154', '-', '2017-04-01', '1994-02-01', '2019-02-01', '08125872576', 'syaifulanwar2926@gmail.com', '6472031608710001', 0, 'images/foto/48631625994178-197108161994021003.jpg', 'aktif', NULL, NULL),
(9, 2, 1, 4, 11, 3, 2, '19680828 199803 1 008', 'Agus Mariyanto, ST', 'Jl. Perum Graha Indah AC/15', 'Balikpapan', '1968-08-28', 'Laki-Laki', 'H.038853', '0000120364301', '-', '2005-10-01', '1998-03-01', '2019-08-16', '08125507567', 'amariyanto88@gmail.com', '6472032808680002', 3677300, 'images/foto/31731625994178-196808281998031008.jpg', 'aktif', NULL, NULL),
(10, 2, 1, 5, 12, 3, 2, '19791124 200701 1 009', 'Dedy Efendi, SE', 'Jl. Jakarta Blok BQ No.21 RT. 067', 'Samarinda', '1979-11-24', 'Laki-Laki', 'P. 060198', '0000120447718', '-', '2019-04-01', '2007-01-01', '2021-04-26', '082111115179', 'e_dedy@yahoo.com', '6472032411790002', 0, 'images/foto/99971625994178-197911242007011009.jpg', 'aktif', NULL, NULL),
(11, 4, 1, 10, 11, 3, 2, '19751222 200112 1 003', 'H. Zul Hermana, ST', 'Jl. A.W.Syahrani Gg 54 RT 24 No.125 Samarinda', 'Samarinda', '1975-12-22', 'Laki-Laki', 'L.028485', '0000120801047', '-', '2014-04-01', '2001-12-01', '2019-02-01', '08125827950', 'zulzaky@gmail.com', '6472052212750003', 2982000, 'images/foto/76951625994178-197512222001121003.jpg', 'aktif', NULL, NULL),
(12, 5, 1, 17, 11, 3, 2, '19661215 198809 1 001', 'Ir. Suryanata Dwi Putera', 'Jl. Mt.Haryono Gg.Rawa Indah 2  Rt.10  No.108 A Kel.Air Putih Kec.Samarinda Ulu', 'Samarinda', '1966-12-15', 'Laki-Laki', 'E.590219', '0000120449248', '-', '2014-10-01', '1988-09-01', '2019-02-01', '08125581453', 'suryanatadwiputra88@gmail.com', '6472031512660005', 0, 'images/foto/44331625994178-196612151988091001.jpg', 'aktif', NULL, NULL),
(13, 4, 1, 11, 11, 3, 2, '19750307 200604 1 004', 'Riman, SP', 'Jl. M.Yamin Gg 1 No 15 RT 17', 'Garut', '1975-03-07', 'Laki-Laki', 'N. 000640', '0000010560971', '-', '2018-04-01', '2006-04-01', '2019-11-01', '081351719449', 'riman.chelse@gmail.com', '6472030703750000', 2688900, 'images/foto/56651625994178-197503072006041004.jpg', 'aktif', NULL, NULL),
(14, 5, 1, 15, 11, 3, 2, '19740328 200112 1 005', 'Noviar Azwari, ST', 'Jl. Lambung Mangkurat Gg.Ii No.53 Samarinda', 'Balikpapan', '1974-03-29', 'Laki-Laki', 'K.045557', '0000120897461', '-', '2014-04-01', '2001-12-01', '2019-02-01', '082151591455', 'fear92smd@gmail.com', '6472052803740001', 3075900, 'images/foto/80061625994178-197403282001121005.jpg', 'aktif', NULL, NULL),
(15, 4, 1, 9, 11, 3, 2, '19650215 199103 1 012', 'Sunar, ST , M.Si', '-', '-', '1970-01-01', 'Laki-Laki', '-', '-', '-', '1970-01-01', '1970-01-01', '1970-01-01', '-', '-', '-', 0, 'images/foto/94341625994178-null.png', 'aktif', NULL, NULL),
(16, 3, 1, 12, 11, 3, 2, '19830405 200904 1 005', 'Riski Aprilian, ST', 'Jl. Aw. Syahranie Gg.45 Blok Tulip No.07 RT.013', 'Samarinda', '1983-04-05', 'Laki-Laki', 'P.538686', '0000149109647', '-', '2019-10-01', '2009-04-01', '2019-02-01', '081253000879', 'mogey@ymail.com', '6472060504830001', 0, 'images/foto/19421625994178-null.png', 'aktif', NULL, NULL),
(17, 2, 1, 18, 12, 1, 2, '19800914 200801 1 023', 'Adhi Hamidan, SE', 'Jl. Aw Syahranie Gg. 2 No. 25 RT. 10', 'Samarinda', '1980-09-14', 'Laki-Laki', 'P. 096078', '0000120474977', '-', '2019-04-01', '2008-01-01', '2020-02-01', '082221442220', 'adhihamidan@gmail.com', '6472031409800004', 0, 'images/foto/65111625994178-198009142008011023.jpg', 'aktif', NULL, NULL),
(18, 2, 1, 18, 14, 1, 2, '19860520 201001 1 004', 'Muhammad Ruspandi, S.Sos', 'Jl. Kh. Wahid Hasyim RT.52', 'Gunung Seriang', '1986-05-20', 'Laki-Laki', 'Q. 234738', '0000166649343', '-', '2020-04-01', '2010-01-01', '2020-01-01', '085249666033', 'muhammad_ruspandi@yahoo.com', '6472052005860003', 2054400, 'images/foto/16121625994178-198605202010011004.jpg', 'aktif', NULL, NULL),
(19, 2, 1, 19, 12, 1, 2, '19840121 201001 1 001', 'Yarhan', 'Jl. Kahoi B5 No.27 RT.31', 'Samarinda', '1984-01-21', 'Laki-Laki', 'Q. 200396', '0000209797931', '-', '2018-04-01', '2010-01-01', '2020-01-01', '085247409999', 'nabil.falah88@gmail.com', '6472062101840007', 2054400, 'images/foto/34351625994178-198401212010011001.jpg', 'aktif', NULL, NULL),
(20, 2, 1, 18, 11, 1, 2, '19790728 200502 1 004', 'Sugeng Widodo', 'Jl. Bengkuring Raya I Blok C 308', 'Kediri', '1979-07-28', 'Laki-Laki', 'M.098542', '0000120477857', '-', '2017-10-01', '2005-02-01', '2020-07-01', '08125559628', 'sugeng_widodolova@yahoo.go.id', '6472022807790000', 1505400, 'images/foto/12851625994178-197907282005021004.jpg', 'aktif', NULL, NULL),
(21, 2, 1, 18, 12, 1, 2, '19851011 201001 1 005', 'Muhamad Dody Swarga', 'Jl. Jelawat Gg.06 No.10 RT.007', 'Samarinda', '1985-10-11', 'Laki-Laki', 'Q. 234815', '\'0000166650939', '-', '2018-04-01', '2010-01-01', '2020-01-01', '081347203438', 'dodyswarga11@gmail.com', '6472041110850008', 2054400, 'images/foto/16171625994178-198510112010011005.jpg', 'aktif', NULL, NULL),
(22, 2, 1, 20, 13, 1, 2, '19830903 200502 1 001', 'Nur Indra Saptoadi, SH', 'Jl. Labu Hijau 8 B.380 RT.72', 'Samarinda', '1983-09-03', 'Laki-Laki', 'M. 098517', '0000120793083', '-', '2018-10-01', '2005-02-01', '2020-01-01', '085246352283', 'ramayamail9@gmail.com', '6472050309830000', 0, 'images/foto/36841625994178-198309032005021001.jpg', 'aktif', NULL, NULL),
(23, 2, 1, 21, 13, 1, 2, '19840702 201212 1 001', 'Muhammad Aidil, SE', 'Jl. Kadrie Oening Gg. H Hurman 2', 'Bulungan', '1984-07-02', 'Laki-Laki', '800/0097/B', '0000173767959', '-', '2020-04-01', '2012-12-01', '2020-02-01', '082351234999', 'adhihamidan@gmail.com', '6472030207840000', 1440880, 'images/foto/88621625994178-null.png', 'aktif', NULL, NULL),
(24, 2, 1, 21, 14, 1, 2, '19790320 200701 2 013', 'Sri Handini, A.Md', 'Jl. Pasundan Gg.6C No.51 RT.026', 'Balikpapan', '1979-03-20', 'Perempuan', 'P 095789', '0000120449079', '-', '2019-10-01', '2007-01-01', '2007-01-01', '08125527018', 'indie_rizak79@yahoo.com', '6472036003790001', 0, 'images/foto/50711625994178-197903202007012013.jpg', 'aktif', NULL, NULL),
(25, 2, 1, 21, 14, 1, 2, '19820419 200502 2 002', 'Herdia Astuti, A.Md', 'Jl. Aw.Syaharani Gg.Wangi No 4 RT 014', 'Samarinda', '1982-04-19', 'Perempuan', 'M.098544', '0000120475991', '-', '2017-04-01', '2005-02-01', '2020-01-01', '081347337989', 'herdiaastuti19@gmail.com', '6472035904820000', 0, 'images/foto/45651625994178-198204192005022002.jpg', 'aktif', NULL, NULL),
(26, 2, 1, 20, 12, 1, 2, '19850523 201001 1 001', 'Asmuransyah', 'Jl. Gotong Royong RT.17 Kel. Handil Bakti', 'Samarinda', '1985-05-23', 'Laki-Laki', 'Q.248932', '0000166464696', '-', '2018-04-01', '2010-01-01', '2020-01-01', '081350033332', 'asmuransky@gmail.com', '6472022305850001', 2054400, 'images/foto/93331625994178-198505232010011001.jpg', 'aktif', NULL, NULL),
(27, 3, 1, 23, 11, 1, 3, '19790622 200502 2 005', 'Nelly Kala, ST', 'Jl. Pemuda Iii Blok C No 97', 'Rantepo', '1979-06-22', 'Perempuan', 'M102406', '0000120448787', '-', '2017-04-01', '2005-02-01', '2020-01-01', '081253806750', 'nelly_kala@yahoo.com', '6472056206790000', 0, 'images/foto/42741625994178-null.png', 'aktif', NULL, NULL),
(28, 3, 1, 23, 11, 1, 2, '19731205 200212 1 005', 'Urif Kurniawan, S.Hut', 'Jl. H.Suwandi 6 No 61 RT.26 Gunung Kelua Kec. Samarinda Uu', 'Samarinda', '1973-12-05', 'Laki-Laki', 'L121052', '0000120449351', '-', '2016-04-01', '2002-12-01', '2020-01-01', '081347925003', 'Urifkurnia12@gmail.com', '6472030512730003', 0, 'images/foto/81051625994178-197312052002121005.jpg', 'aktif', NULL, NULL),
(29, 3, 1, 22, 11, 1, 1, '19770629 200801 1 014', 'Elvin Mihael Arief, SE', '-', '-', '1970-01-01', 'Laki-Laki', '-', '-', '-', '1970-01-01', '1970-01-01', '1970-01-01', '-', 'el.bakafo@gmail.com', '-', 0, 'images/foto/82351625994178-null.png', 'aktif', NULL, NULL),
(30, 3, 1, 23, 13, 1, 2, '19730120 200901 1 001', 'Wahyu Anwar, ST', 'Jl. Perum Pesona Mahakam Blok E4 No. 10 Samarinda', 'Ciamis', '1973-01-20', 'Laki-Laki', 'Q. 201325', '-', '-', '2018-10-01', '2009-01-01', '2020-01-01', '082150240025', 'Wahyuanwarst@gmail.com', '6472032001730002', 0, 'images/foto/43701625994178-197301202009011001.jpg', 'aktif', NULL, NULL),
(31, 3, 1, 23, 11, 1, 2, '19830413 201503 2 002', 'Elfarina Permatasari, ST', 'Jl. Perum S.B.E Blok G No.08 Kutai Timur', 'Palembang', '1983-04-13', 'Perempuan', 'CPNS', '0001547671937', '-', '2019-10-01', '2015-03-01', '2020-01-01', '085350495600', 'elfarina.permatasari@gmail.com', '6408045304830006', 0, 'images/foto/37701625994178-null.png', 'aktif', NULL, NULL),
(32, 3, 1, 22, 14, 1, 2, '19840926 201001 1 009', 'Mochammad Reza Irfani, A.Md', 'Jl. Manunggal Gg.19 RT.082', 'Balikpapan', '1984-09-26', 'Laki-Laki', 'Q.247552', '0000168102707', '-', '2019-10-01', '2010-01-01', '2020-01-01', '0852317760999', 'm.rezairfani@gmail.com', '6472062609840002', 2163700, 'images/foto/75851625994178-198409262010011009.jpg', 'aktif', NULL, NULL),
(33, 3, 1, 24, 12, 1, 2, '19791027 200701 2 005', 'Silvana', 'Jl. Wolter Monginsidi Gg. Sinarsari RT.21', 'Samarinda', '1979-10-27', 'Perempuan', 'A08004240', '0000120364042', '-', '2019-10-01', '2007-01-01', '2020-01-01', '082152787679', 'Lalaivana070@gmail.com', '6472036710790006', 0, 'images/foto/18591625994178-197910272007012005.jpg', 'aktif', NULL, NULL),
(34, 3, 1, 22, 13, 1, 4, '19800707 200801 1 026', 'Yulius Yonas Tappangan, ST', 'Jl. Sultan Alimuddin Rt.37 No.40', 'Tana Toraja', '1980-07-07', 'Laki-Laki', 'P 415195', '0000120478533', '-', '2018-04-01', '2008-01-01', '2020-01-01', '085250556251', 'yulius.yonas1980@gmail.com', '6472040707800002', 2399500, 'images/foto/98721625994178-198007072008011026.jpg', 'aktif', NULL, NULL),
(35, 3, 1, 24, 13, 1, 2, '19800305 200901 1 004', 'Muhammad Saleh Afif, ST', 'Jl. Hamm. Rifadin RT.24 Kel. Simpang Tiga', 'Jambi', '1980-03-05', 'Laki-Laki', 'Q. 056220', '0000148844081', '-', '2018-04-01', '2009-01-01', '2020-01-01', '081350700170', 'Muhammadsalehafif47791@gmail.com', '6472020503800010', 2543500, 'images/foto/34131625994178-198003052009011004.jpg', 'aktif', NULL, NULL),
(36, 4, 1, 26, 12, 1, 2, '19701107 199903 1 003', 'Anwar Napolin, ST', 'Jl. Pakis Merah 3 RT.85 No.535 Bengkuring', 'Kutai Kartanegara', '1970-11-07', 'Laki-Laki', 'J.006518', '0000120801677', '-', '2018-04-01', '1999-03-01', '2020-01-01', '081326066172', 'antwars07@gmail.com', '6472050711700000', 2744900, 'images/foto/57841625994178-197011071999031003.jpg', 'aktif', NULL, NULL),
(37, 4, 1, 26, 12, 1, 2, '19780314 201001 2 001', 'Aulia Marini, ST', 'Jl. Danau Jempang No.12 RT 25', 'Samarinda', '1978-03-14', 'Perempuan', 'Q. 200382', '0000209155162', '-', '2018-04-01', '2010-01-01', '2020-01-01', '081316346542', 'auliamarini@gmail.com', '6472045403780000', 2661100, 'images/foto/23481625994178-197803142010012001.jpg', 'aktif', NULL, NULL),
(38, 4, 1, 27, 12, 1, 2, '19811112 200502 1 003', 'Burhan Banhar, ST', 'Jl. Ramania RT.046 No.22', 'Samarinda', '1981-11-12', 'Laki-Laki', 'M.098411', '000120475427', '-', '2019-04-01', '2005-02-01', '2020-01-01', '085246193222', 'Burchanbanhar@gmail.com', '6472031211810000', 0, 'images/foto/29041625994178-198111122005021003.jpg', 'aktif', NULL, NULL),
(39, 4, 1, 27, 14, 1, 1, '19830817 200701 1 004', 'Ronal, ST', 'Jl. Gerilya Gg. Rukun Makmur No. 95 RT. 58', 'Samarinda', '1983-08-17', 'Laki-Laki', 'P.304060', '000120321156', '-', '1970-01-01', '2007-01-01', '1970-01-01', '081222363805', 'ronalrossa@gmail.com', '64720517088300012', 0, 'images/foto/71401625994178-198308172007011004.jpg', 'aktif', NULL, NULL),
(40, 4, 1, 26, 12, 1, 2, '19780606 200701 1 019', 'Zainuri, ST', 'Jl. Trisari RT.20', 'Lamongan', '1978-06-06', 'Laki-Laki', 'P 156872', '0000120343083', '-', '2019-04-01', '2007-01-01', '2020-01-01', '08125551406', 'zainurizakiy@gmail.com', '64720303606780005', 0, 'images/foto/97241625994178-197806062007011019.jpg', 'aktif', NULL, NULL),
(41, 4, 1, 27, 13, 1, 2, '19860424 201503 1 004', 'Fauzan Fazairin.M, ST', 'Jl. Jakarta 2 Perum Korpri Daksa Blok D7 No 15 Samarinda', 'Kotawaringin Timur', '1986-04-24', 'Laki-Laki', 'CPNS', '-', '-', '2019-10-01', '2015-03-01', '2020-01-01', '082337408886', 'fauzan.fazairin@gmail.com', '620205240486001', 0, 'images/foto/11711625994178-null.png', 'aktif', NULL, NULL),
(42, 4, 1, 25, 13, 1, 2, '19870420 201503 1 002', 'Joko Susilo, ST', 'Jl. K.H.Mustofa Kel. Debong Kidul Tegal', 'Tegal', '1987-04-20', 'Laki-Laki', 'CPNS', '0002239224333', '-', '2019-10-01', '2015-03-01', '2020-01-01', '085640081331', 'jo.susilo@ymail.com', '337603200487001', 0, 'images/foto/26071625994178-196604251993121001.jpg', 'aktif', NULL, NULL),
(43, 4, 1, 25, 14, 1, 2, '19870909 201001 1 007', 'Muhammad Rijal Muttaqien, A.Md', 'Jl. Perum Permata Hijau Blok A No. 8', 'Banjarmasin', '1987-09-09', 'Laki-Laki', 'Q.234803', '0000168071411', '-', '2019-10-01', '2010-01-01', '2020-01-01', '085250310963', 'ijal_0909@yahoo.com', '6472030909870005', 2163700, 'images/foto/26441625994178-198709092010011007.jpg', 'aktif', NULL, NULL),
(44, 4, 1, 25, 11, 1, 2, '19760606 200801 1 013', 'Robert Edowin', 'Jl. Danau Tondano RT.26 No.10 Kel.Sungai Pinang Luar Kec.Samarinda Kota', 'Samarinda', '1970-01-01', 'Laki-Laki', 'P 095885', '0000120477475', '-', '2020-04-01', '2008-01-01', '2020-01-01', '085250502859', 'robeterona@gmail.com', '6472030602760006', 0, 'images/foto/71491625994178-197602062008011013.jpg', 'aktif', NULL, NULL),
(45, 4, 1, 25, 14, 1, 2, '19800404 201408 1 002', 'Erwin Apriano', 'Jl. Arjuna Gg 2 RT.14 No.119', 'Samarinda', '1980-04-04', 'Laki-Laki', 'B 08015167', '0001883732422', '-', '2020-04-01', '2014-08-01', '2020-02-01', '081350693336', 'erwin.aries80@gmail.com', '6472030404800001', 2356400, 'images/foto/55821625994178-198004042014081002.jpg', 'aktif', NULL, NULL),
(46, 4, 1, 26, 14, 1, 2, '19810225 200903 2 010', 'Asnawati, A .Md', 'Jl. Damanhuri Perum Bukit Temindung Indah Blok Ag. No.17 Kel. Mugirejo', 'Polewali Mamasa', '1981-02-25', 'Perempuan', 'A08001665', '-', '-', '2017-10-01', '2009-03-01', '2020-01-01', '081355381232', 'asna.aria@yahoo.com', '6472066502810006', 1566300, 'images/foto/64901625994178-198102252009032010.jpg', 'aktif', NULL, NULL),
(47, 5, 1, 29, 11, 1, 2, '19830529 200904 1 005', 'Muhammad Heru Firmanto, ST', 'Jl. Suwandi No.05 RT.24', 'Samarinda', '1983-05-29', 'Laki-Laki', 'P414915', '-', '-', '2021-04-01', '2009-04-01', '2020-01-01', '081250702898', 'mhfirmanto@gmail.com', '6403052905830000', 0, 'images/foto/53411625994178-198305292009041005.jpg', 'aktif', NULL, NULL),
(48, 5, 1, 30, 12, 1, 2, '19790703 201001 2 023', 'Hilyati Rivai Bungsu, ST, MT', 'Jl. A.W.Syahrani Gg.Kejaksaan No.2 RT.35 Kel.Gunung Kelua Kecamatan Samarinda Ulu', 'Medan', '1979-07-03', 'Perempuan', 'N.645299', '196375803', '-', '2017-10-01', '2010-01-01', '2020-01-01', '082139791979', 'hilyati.rb@gmail.com', '1271214307790006', 0, 'images/foto/76531625994178-null.png', 'aktif', NULL, NULL),
(49, 5, 1, 28, 13, 1, 2, '19641204 198503 1 005', 'Muhammad Zulkiflie', 'Jl. Cempaka No.16', 'Samarinda', '1964-12-04', 'Laki-Laki', 'D.257503', '-', '-', '2005-04-01', '1985-03-01', '2020-01-01', '00811553213', 'm.zulkiflie64psu@gmail.com', '6472030412640001', 1102600, 'images/foto/69301625994178-196412041985031005.jpg', 'aktif', NULL, NULL),
(50, 5, 1, 28, 13, 1, 2, '19851019 200801 1 004', 'Nurul Huda, ST', 'Jl. P.Suryanata. RT.60 No.43', 'Samarinda', '1985-10-19', 'Laki-Laki', 'P.415131', '120323485', '-', '2018-04-01', '2008-01-01', '2020-01-01', '082149441948', 'hudadzaky1985@gmail.com', '6472031910850007', 2326300, 'images/foto/34211625994178-198510192008011004.jpg', 'aktif', NULL, NULL),
(51, 2, 1, 21, 13, 1, 2, '19760905 200701 1 015', 'Wahyudi Rizal, SE', 'Jl. Anggrek Pandaii No.28 RT.024', 'Samarinda', '1976-09-05', 'Laki-Laki', 'P.095785', '-', '-', '2020-04-01', '2007-01-01', '2020-01-01', '082154604472', '05wr.rizal@gmail.com', '6472050509760007', 0, 'images/foto/28141625994178-197609052007011015.jpg', 'aktif', NULL, NULL),
(52, 5, 1, 30, 11, 1, 2, '19870920 200604 1 003', 'Muhammad Khairul Fajri. S', 'Jl. Gunung Lingai Gg.Hijrah RT.10 No.25', 'Samarinda', '1987-09-20', 'Laki-Laki', 'N.000612', '120477036', '-', '2018-04-01', '2006-04-01', '2020-01-01', '081347469478', 'aji_khadaf@yahoo.co.id', '6472052009870007', 2075900, 'images/foto/59521625994178-198709202006041003.jpg', 'aktif', NULL, NULL),
(53, 5, 1, 30, 12, 1, 2, '19800821 200902 1 005', 'Dovan Rarenra', 'Jl. Gatot Subroto Gg.16 No.31 RT.25 Samarinda', 'Kota Bangun', '1980-08-21', 'Laki-Laki', 'P.417232', '161679216', '-', '2017-10-01', '2009-12-01', '2020-02-01', '08125548911', 'dovanrarendra@gmail.com', '6472052108800917', 1220600, 'images/foto/21831625994178-198008212009021005.jpg', 'aktif', NULL, NULL),
(54, 5, 1, 30, 13, 1, 2, '19810517 200003 1 002', 'Sayid Ryan  Andriannur', 'Jl. Rotansegah No.06', 'Tenggarong', '1981-05-17', 'Laki-Laki', 'J108909', '120321279', '-', '2010-10-01', '2000-03-01', '2020-03-03', '081314225758', 'kantor.ryan@gmail.com', '6472031705810003', 0, 'images/foto/88721625994178-198105172000031002.jpg', 'aktif', NULL, NULL),
(55, 3, 1, 24, 13, 1, 3, '19770905 200901 1 002', 'Hasihholan Wilson, ST', 'Jl. Perum Talangsari Blok Ah. No.2 RT.30', 'Long Iram', '1977-09-05', 'Laki-Laki', 'P 415175', '148401988', '-', '2013-04-01', '2009-01-01', '2020-03-04', '082250520050', 'holanvenom01@gmail.com', '6472040509770007', 0, 'images/foto/30161625994178-197709052009011002.jpg', 'aktif', NULL, NULL),
(56, 3, 1, 23, 13, 1, 2, '19780506 200604 1 018', 'Ahmad Helmi', 'Jl. Bung Tomo Gg.H.Syahran RT.11', 'Balikpapan', '1978-05-06', 'Laki-Laki', 'N 363373', '-', '-', '2017-10-01', '2006-04-01', '2020-06-01', '-', 'ahmadhelmi6546@gmail.com', '-', 0, 'images/foto/79861625994178-197805062006041018.jpg', 'aktif', NULL, NULL),
(57, 4, 1, 23, 13, 1, 2, '19760814 200801 1 014', 'Aspul Anwar, SE', 'Jl. Soekarno Hatta RT.15 No.28 Loa Janan', 'Samarinda', '1976-08-14', 'Laki-Laki', 'P 154461', '120311673', '-', '2015-04-01', '2008-01-01', '2020-06-01', '082158533344', 'aspul140876@gmail.com', '6472021408760004', 0, 'images/foto/57611625994178-197608142008011014.jpg', 'aktif', NULL, NULL),
(58, 3, 2, 31, NULL, NULL, 3, NULL, 'AHASY WEROS HEBER, SE', 'JL. BATU CERMIN RT.06 NO.07 SEMPAJA UTARA', 'KERAYAN', '1984-08-01', 'Laki-Laki', NULL, '-', '16.055.503.3-722.000', NULL, NULL, NULL, '085756560828', 'ahasjevier.hebert@gmail.com', '-', 0, 'images/foto/45531626852228-ahasy-weros-heber.jpg', 'aktif', NULL, NULL),
(61, 5, 3, 44, NULL, NULL, 3, '2009.09.01.0017', 'Deddy Bonivasius Sihotang, S.Sos', '-', 'Samarinda', '1986-05-04', 'Laki-Laki', NULL, '0001327294822', '15.554.513.0-722.000', NULL, NULL, NULL, '085393333986', 'djebons@gmail.com', '6472030405860002', 0, 'images/foto/61081626850457-deddy-bonivasius.jpg', 'aktif', NULL, NULL),
(62, 3, 2, 31, NULL, NULL, 2, NULL, 'DJOKO SUGITO, A.Md', 'JL. MUGIREJO  GANG. MANUNGGAL V RT. 07 NO. 27 KELURAHAN MUGIREJO KECAMATAN SUNGAI PINANG', 'Samarinda', '1978-06-29', 'Laki-Laki', NULL, '0002315487394', '16.055.795.5-722.000', NULL, NULL, NULL, '085248255814', 'djokosembung99@gmail.com', '-', 0, 'images/foto/59351626852181-djoko-sugito.jpg', 'aktif', NULL, NULL),
(63, 3, 2, 31, NULL, NULL, 2, NULL, 'TRIANI ISDAYANTI MEIDIANA, R.Eng', 'JL. DAMANHURI 2 PERUM DTI BORNEO SKM BLOK F3 98 KELURAHAN MUGIREJO KECAMATAN SUNGAI PINANG', 'Balikpapan', '1996-05-17', 'Perempuan', NULL, '-', '-', NULL, NULL, NULL, '-', 'triani.mediana17@gmail.com', '-', 0, 'images/foto/16201626852153-triani-isdayanti.jpg', 'aktif', NULL, NULL),
(64, 5, 2, 34, NULL, NULL, 2, NULL, 'RICKA INDRIA PRATIWI, S.Si', 'JL. JUANDA 7 NO. 7 RT. 04 KELURAHAN AIR HITAM KECAMATAN SAMARINDA ULU', 'Tenggarong', '1993-09-30', 'Perempuan', NULL, '00009829284', '80.563.243.7-722.000', NULL, NULL, NULL, '085246750201', 'ricka.zenfone6@gmail.com', '-', 0, 'images/foto/8861626852125-ricka-indria-pratiwi.jpg', 'aktif', NULL, NULL),
(65, 4, 2, 32, NULL, NULL, 2, NULL, 'LARAS ATIKAH MAOUDINI, ST', 'JL. KADRIE OENING PANDAN HARUM INDAH BLOK B/2 RT.019 KEL. AIR HITAM KEC. SAMARINDA ULU', 'Samarinda', '1999-07-05', 'Perempuan', NULL, '0000123121214', '-', NULL, NULL, NULL, '082250492509', 'triani.mediana17@gmail.com', '-', 0, 'images/foto/36911626852072-laras-atikah.jpg', 'aktif', NULL, NULL),
(66, 2, 2, 32, NULL, NULL, 2, NULL, 'PUTRI RAMADHANI, ST', 'JL. RAPAK INDAH RT.035 NO.70 KELURAHAN KARANG ASAM ILIR KECAMATAN SUNGAI KUNJANG SAMARINDA', 'Samarinda', '1996-02-06', 'Perempuan', NULL, '-', '-', NULL, NULL, NULL, '085252804757', 'Putri.ramadhani2913@gmail.com', '-', 0, 'images/foto/14501626233686-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(67, 3, 3, 44, NULL, NULL, 2, '2010.01.01.0045', 'Hendra Kusuma Persada, ST', '-', 'Bajo', '1981-04-30', 'Laki-Laki', NULL, '-', '16.585.512.3-722.000', NULL, NULL, NULL, '081355260044', 'Persadaku81@gmail.com', '6472053004810007', 0, 'images/foto/16521626233786-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(68, 5, 2, 33, NULL, NULL, 2, NULL, 'ANDI MUHAMMAD ADE SATRIYA, S.Si, M.Si', 'JL. MT. HARYONO PERUM RAWASARI RT. 011 RW. 003 NO. 22 KELURAHAN AIR PUTIH KECAMATAN SAMARINDA ULU', 'Samarinda', '1988-09-28', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '085247719996', 'email@email.com', '-', 0, 'images/foto/66561626851965-andi-muhammad.jpg', 'aktif', NULL, NULL),
(69, 3, 3, 44, NULL, NULL, 2, '2010.06.01.0078', 'Widyawati Zusana, SE', '-', 'Samarinda', '1985-06-13', 'Perempuan', NULL, '0001480856883', '77.149.487.9-722.000', NULL, NULL, NULL, '081337390280', 'widywatizusana@yahoo.com', '6472035306850012', 0, 'images/foto/87741626850287-widyawati-suzanna.jpg', 'aktif', NULL, NULL),
(70, 2, 3, 44, NULL, NULL, 2, '2010.07.01.0087', 'Junadi, A.Md', '-', 'Samarinda', '1982-06-14', 'Laki-Laki', NULL, '0001925277546', '77.149.499.4-722.000', NULL, NULL, NULL, '082250707433', 'Junadidoank11@gmail', '6472051406820005', 0, 'images/foto/87721626850231-junaidi.jpg', 'aktif', NULL, NULL),
(71, 5, 2, 33, NULL, NULL, 2, NULL, 'HENDRO ANDY WICAHYONO, A.Md.Ars', 'JL. KH. HARUN NAFSI RT. 025 KELURAHAN RAPAK DALAM KECAMATAN LOA JANAN ILIR', 'Samarinda', '1997-12-26', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '082254515468', 'hendroandy15@gmail.com', '-', 0, 'images/foto/66531626234800-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(72, 2, 3, 44, NULL, NULL, 2, '2010.08.01.0090', 'Indah Budiyana', '-', 'Samarinda', '1975-08-31', 'Perempuan', NULL, '00010412164329', '77.149.486.1-722.000', NULL, NULL, NULL, '082251328839', 'indahbudiyana58@yahoo.com', '6472047108750002', 0, 'images/foto/40581626849998-indahbudiyana.jpg', 'aktif', NULL, NULL),
(73, 4, 2, 33, NULL, NULL, 2, NULL, 'ABDUROHIM', 'JL. SULTAN ALIMUDDIN NO.30 RT.35 KELURAHAN SELILI', 'Samarinda', '1989-04-01', 'Laki-Laki', NULL, '-', '16.727.387.9-722.000', NULL, NULL, NULL, '085393315059', 'abdurohim7956@gmail.com', '-', 0, 'images/foto/83921626851889-abdurohim.jpg', 'aktif', NULL, NULL),
(74, 4, 2, 33, NULL, NULL, 2, NULL, 'ZULKIPLI TIAR', 'JL. GUNUNG LINGAI RT 10 NO.12 KECAMATAN SUNGAI PINANG', 'Samarinda', '1985-12-04', 'Laki-Laki', NULL, '-', '16.503.342.4-722.000', NULL, NULL, NULL, '081253394637', 'Zulkiplitiar@gmail.com', '-', 0, 'images/foto/39341626240656-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(75, 4, 3, 44, NULL, NULL, 2, '2010.11.01.0114', 'Danny Ganda Saputra, ST', '-', 'Samarinda', '1987-04-27', 'Laki-Laki', NULL, '-', '64.028.922.9-722.000', NULL, NULL, NULL, '082255664460', 'dgs658@hotmail.com', '6472052704830001', 0, 'images/foto/55111626240760-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(76, 2, 2, 33, NULL, NULL, 2, NULL, 'NOVA, SE', 'JL.  DAMAI GANG.5 RT.25 KELURAHAN SIDODAMAI KECAMATAN SAMARINDA ILIR', 'Samarinda', '1989-11-23', 'Laki-Laki', NULL, '-', '64.131.309.3-722.000', NULL, NULL, NULL, '082250603365', 'novabregas2304@gmail.com', '-', 0, 'images/foto/23611626851811-nova.jpg', 'aktif', NULL, NULL),
(77, 4, 3, 44, NULL, NULL, 2, '2011.04.01.0131', 'Fitriani', '-', 'Long Iram', '1981-06-14', 'Perempuan', NULL, '0001727278841', '16.308.705.9-722.000', NULL, NULL, NULL, '083140617154', 'fitriani372634@gmail.com', '6472055408810001', 0, 'images/foto/46331626849888-fitriani.jpg', 'aktif', NULL, NULL),
(78, 3, 2, 33, NULL, NULL, 2, NULL, 'RIZAL AZIS', 'JL. KADRIE OENING GANG SRIKAYA V NO 37 RT.11 RW.04 SAMARINDA', 'Samarinda', '1984-10-03', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '081350858111', 'rizalazis84@yahoo.co.id', '-', 0, 'images/foto/32631626851756-rizal-azis.jpg', 'aktif', NULL, NULL),
(79, 4, 3, 44, NULL, NULL, 2, '2011.05.01.0295', 'Agus Rakhmansyah', '-', 'Samarinda', '1970-08-17', 'Laki-Laki', NULL, '-', '16.308.716.6-722.000', NULL, NULL, NULL, '081219444470', 'enjolrakhmansyah@gmail.com', '6472031708700002', 0, 'images/foto/37311626241197-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(80, 2, 3, 44, NULL, NULL, 2, '2011.05.01.0296', 'Fadli', '-', 'Samarinda', '1987-04-26', 'Laki-Laki', NULL, '-', '77.149.483.8-722.000', NULL, NULL, NULL, '085250063397', 'fadlicoy25@yahoo.co.id', '6472052604870007', 0, 'images/foto/61231626849771-fadli.jpg', 'aktif', NULL, NULL),
(81, 2, 3, 44, NULL, NULL, 2, '2011.05.01.0297', 'Mislan', '-', 'Surabaya', '1973-05-15', 'Laki-Laki', NULL, '-', '14.941.783.4-722.000', NULL, NULL, NULL, '08255746242', 'coolmislan12@gmail.com', '6472051505730006', 0, 'images/foto/31021626849730-mislan.jpg', 'aktif', NULL, NULL),
(82, 2, 3, 44, NULL, NULL, 2, '2011.08.01.0440', 'Eka Heriyani, SE, M.Si', '-', 'Samarinda', '1979-10-13', 'Perempuan', NULL, '000120347645', '77.149.498.6-722.000', NULL, NULL, NULL, '0811585820', 'eka_heriyani@yahoo.com', '6472055310790003', 0, 'images/foto/49501626849683-non-pns-1.jpg', 'aktif', NULL, NULL),
(86, 2, 3, 44, NULL, NULL, 2, '2011.09.01.0464', 'Hendra Saputra', '-', 'Samarinda', '1990-02-16', 'Laki-Laki', NULL, '0000120320482', '16.503.288.9-722.000', NULL, NULL, NULL, '085250962345', 'hendrasaputrarifra@yahoo.co.id', '6472061602900001', 0, 'images/foto/5031626849632-hendra-saputra.jpg', 'aktif', NULL, NULL),
(87, 3, 3, 44, NULL, NULL, 2, '2011.09.01.0491', 'Tezar Sukma Hanggara', '-', 'Samarinda', '1973-01-27', 'Laki-Laki', NULL, '-', '16.727.386.4-722.000', NULL, NULL, NULL, '085250022275', 'Addavihanggara2527@gmail.com', '6472042701830008', 0, 'images/foto/91421626849574-tezar-sukma-hanggara.jpg', 'aktif', NULL, NULL),
(88, 3, 3, 44, NULL, NULL, 2, '2011.09.01.0531', 'Wahyuni Ramli, A.Md', '-', 'Samarinda', '1983-09-15', 'Perempuan', NULL, '-', '77.149.507.4-722.000', NULL, NULL, NULL, '08125558772', 'NunyPink1@gmail.com', '6472066609830014', 0, 'images/foto/73181626849537-wahyuni-ramli.jpg', 'aktif', NULL, NULL),
(89, 5, 3, 44, NULL, NULL, 2, '2011.11.01.0598', 'Hari Purwoto, S. Hut', '-', 'Balikpapan', '1983-06-19', 'Laki-Laki', NULL, '0001820124606', '16.007.847.3-722.000', NULL, NULL, NULL, '08115553177', 'haripw19@gmail.com', '6472021906830003', 0, 'images/foto/75481626849482-hari-purwoto.jpg', 'aktif', NULL, NULL),
(90, 4, 3, 44, NULL, NULL, 2, '2012.01.01.0816', 'Akhmad Miqdad', '-', 'Lamongan', '1986-04-09', 'Laki-Laki', NULL, '-', '16.281.804.1-722.000', NULL, NULL, NULL, '081220241336', 'ahmadakhmad21@gmail.com', '6472052104860004', 0, 'images/foto/37731626849437-akhmad-midad.jpg', 'aktif', NULL, NULL),
(91, 2, 3, 44, NULL, NULL, 2, '2012.03.01.0838', 'Januar Kusuma Zatmika', '-', 'Samarinda', '1990-01-27', 'Laki-Laki', NULL, '-', '72.983.921.7-722.000', NULL, NULL, NULL, '085250338730', 'januar.Kusuma27@gmail.com', '6472052701900005', 0, 'images/foto/64261626849388-januar.jpg', 'aktif', NULL, NULL),
(92, 3, 3, 44, NULL, NULL, 2, '2012.05.01.0956', 'Imam Shaimuddin, ST', '-', 'Samarinda', '1974-11-02', 'Laki-Laki', NULL, '0002446331841', '68.822.958.2-722.000', NULL, NULL, NULL, '085250294441', 'imams.cktk@gmail.com', '6472050210740008', 0, 'images/foto/32421626849351-imam-shaimuddin.jpg', 'aktif', NULL, NULL),
(93, 4, 3, 44, NULL, NULL, 2, '2012.10.01.1085', 'Risma Ramawinata', '-', 'Samarinda', '1988-05-18', 'Laki-Laki', NULL, '-', '77.149.477.0-722.000', NULL, NULL, NULL, '081258043242', 'rismaramawinata@yahoo.co.id', '6472061806860009', 0, 'images/foto/10471626849305-risma-ramawinata.jpg', 'aktif', NULL, NULL),
(94, 2, 3, 40, NULL, NULL, 2, '2013.02.01.1096', 'Edi Heriadi. HR', '-', 'Banjarmasin', '1973-10-12', 'Laki-Laki', NULL, '0002213325764', '86.524.128.5-722.000', NULL, NULL, NULL, '08125541259', '-', '6472051210730002', 0, 'images/foto/5231626849257-edi-hariadi.jpg', 'aktif', NULL, NULL),
(95, 4, 3, 44, NULL, NULL, 2, '2013.05.01.1133', 'Siti Nur Fatimah, S.Sos', '-', 'Loa Janan', '1988-12-20', 'Perempuan', NULL, '0001154900609', '74.372.844.6-722.000', NULL, NULL, NULL, '085245884266', 'nurfatimahsiti36@gmail.com', '6472026812880003', 0, 'images/foto/89741626849215-non-pns-1.jpg', 'aktif', NULL, NULL),
(96, 2, 3, 44, NULL, NULL, 2, '2013.03.01.1109', 'Fitriansyah Akbar', '-', 'Samarinda', '1994-06-25', 'Laki-Laki', NULL, '-', '72.056.447.5-722.000', NULL, NULL, NULL, '08520022275', 'Fitriansyahakbar123@gmail.com', '6472052506940001', 0, 'images/foto/43431626849167-fitriansyah-akbar.jpg', 'aktif', NULL, NULL),
(97, 2, 2, 33, NULL, NULL, 2, NULL, 'EKO PRASTIYO', 'JL. BIAWAN GANG 5 RT. 12 NO.39 KEL SIDOMULYO SAMARINDA', 'SAMARINDA', '1985-09-30', 'Laki-Laki', NULL, '0001550232358', '-', NULL, NULL, NULL, '081256168980', 'ekoprastiyo63@gmail.com', '-', 0, 'images/foto/79001626851716-eko-prastiyo.jpg', 'aktif', NULL, NULL),
(98, 4, 2, 33, NULL, NULL, 2, NULL, 'SAIDMAN', 'JL. KAKAP GANG 5 KELURAHAN SUNGAI DAMA KECAMATAN SAMARINDA ILIR', 'SAMARINDA', '1991-06-30', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '081257814947', 'saidman1006@yahoo.com', '-', 0, 'images/foto/43361626851666-saidman.jpg', 'aktif', NULL, NULL),
(99, 4, 3, 44, NULL, NULL, 2, '2013.08.01.1238', 'Achmad Yani, ST', '-', 'Samarinda', '1986-01-08', 'Laki-Laki', NULL, '-', '71.256.253.7-722.000', NULL, NULL, NULL, '082313246776', 'y.achmad72@yahoo.com', '6472020801860001', 0, 'images/foto/98641626849099-non-pns-1.jpg', 'aktif', NULL, NULL),
(100, 5, 2, 33, NULL, NULL, 2, NULL, 'MARIYANTO', 'JL. PROPENSI RT. 06 KELURAHAN MAKROMAN KECAMATAN SAMBUTAN SAMARINDA', 'MAKROMAN', '1984-04-21', 'Laki-Laki', NULL, '000115487727', '74.322.470.1-722.000', NULL, NULL, NULL, '085246924575', 'mariyanto344@gmail.com', '-', 0, 'images/foto/25661626851626-mariyanto.jpg', 'aktif', NULL, NULL),
(101, 5, 2, 33, NULL, NULL, 2, NULL, 'ARIFIN ZAMIAN, S.Sos', 'JL. MARKISA NO.40 RT.08 KELURAHAN GUNUNG KELUA SAMARINDA', 'KOTA BANGUN', '1992-05-23', 'Laki-Laki', NULL, '0001154895636', '74.315.117.7-722.000', NULL, NULL, NULL, '085232880296', 'arifin.zamian92@gmail.com', '-', 0, 'images/foto/82591626851556-arifin-jamian.jpg', 'aktif', NULL, NULL),
(102, 3, 3, 44, NULL, NULL, 2, '2013.08.01.1237', 'Dini Novita, S.Ak', '-', 'Samarinda', '1994-01-29', 'Perempuan', NULL, '0002256086586', '64.131.310.1-722.000', NULL, NULL, NULL, '081234454619', 'dini29jan@gmail.com', '6472056901940001', 0, 'images/foto/10681626849057-dini-novita.jpg', 'aktif', NULL, NULL),
(103, 2, 2, 33, NULL, NULL, 2, NULL, 'MARLINA RUSNAYANTI, SE', 'JL. PAKIS HIJAU 7 D/106 RT. 082 KEL. SEMPAJA SELATAN SAMARINDA', 'SAMARINDA', '1992-07-23', 'Perempuan', NULL, '0081154877265', '74.333.948.3-722.000', NULL, NULL, NULL, '085250422307', 'u-leb@gmail.com', '-', 0, 'images/foto/22581626851488-non-pns-1.jpg', 'aktif', NULL, NULL),
(104, 3, 3, 44, NULL, NULL, 2, '2013.09.01.1246', 'Winda Novitasari, SE', '-', 'Samarinda', '1988-03-16', 'Perempuan', NULL, '00012781066367', '16.574.850.0-722.000', NULL, NULL, NULL, '085226256868', 'winda.serenity@gmail.com', '6472034603880002', 0, 'images/foto/25211626848999-winda-novitasari.jpg', 'aktif', NULL, NULL),
(105, 3, 2, 33, NULL, NULL, 2, NULL, 'AULIA RIZKINAWATIE AGUS, S.Ak', 'JL. SUWANDI BLOK A5 RT. 022 KELURAHAN GUNUNG KELUA SAMARINDA ULU', 'SAMARINDA', '1992-12-15', 'Perempuan', NULL, '-', '73.743.861.4-722.000', NULL, NULL, NULL, '085250760067', 'aulaulia888@gmail.com', '-', 0, 'images/foto/76161626851396-auliah.jpg', 'aktif', NULL, NULL),
(106, 3, 3, 44, NULL, NULL, 2, '2013.08.01.1241', 'Novy Haryani, ST', '-', 'Balikpapan', '1982-11-13', 'Perempuan', NULL, '0001275733901', '87.144.951.4-721.000', NULL, NULL, NULL, '085347009090', 'novyharyaninh@gmail.com', '6471055311820001', 0, 'images/foto/6061626848951-novy-haryani.jpg', 'aktif', NULL, NULL),
(107, 5, 2, 33, NULL, NULL, 2, NULL, 'ASPIANSYAH', 'JL. SLAMET RIYADI RT. 004 KEL. KARANG ASAM ILIR SAMARINDA', 'SAMARINDA', '1977-05-07', 'Laki-Laki', NULL, '0001154895568', '16.564.203.4-722.000', NULL, NULL, NULL, '081253791283', 'Aspiansyah.2014@g,ail.com', '-', 0, 'images/foto/7521626851300-aspiansyah.jpg', 'aktif', NULL, NULL),
(108, 2, 3, 44, NULL, NULL, 2, '2014.01.01.1282', 'Mas Eka Putra', '-', 'Kutai', '1970-09-20', 'Laki-Laki', NULL, '-', '81.133.656.9-722.000', NULL, NULL, NULL, '08125328963', '-', '6472062009700004', 0, 'images/foto/92001626312625-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(109, 2, 2, 33, NULL, NULL, 2, NULL, 'ALYSA AMALIA', 'JL. DR. SUTOMO GANG 4 RT.032 NO.23 KELURAHAN SIDODADI KECAMATAN SAMARINDA ULU', 'LOA DURI', '2000-09-08', 'Perempuan', NULL, '0002293183563', '92.479.700.4-741.000', NULL, NULL, NULL, '08152059434', 'alysaamalia122@gmail.com', '-', 0, 'images/foto/92811626851253-non-pns-1.jpg', 'aktif', NULL, NULL),
(110, 2, 2, 33, NULL, NULL, 2, NULL, 'HUTAMI PUJI LESTARI, SE', 'JL.PROKLAMASI 1 RT. 054 KELURAHAN SUNGAI PINANG DALAM KECAMATAN SUNGAI PINANG', 'TOLI-TOLI', '1989-02-13', 'Perempuan', NULL, '001441614251', '75.700.029.4-722.000', NULL, NULL, NULL, '081312261324', 'hutamipujilestari@gmail.com', '-', 0, 'images/foto/21501626851160-hutami-puji-lestari.jpg', 'aktif', NULL, NULL),
(111, 2, 3, 44, NULL, NULL, 4, '2014.01.01.1296', 'Rizki Ulandary, SE', '-', 'Tanah Grogot', '1982-06-05', 'Perempuan', NULL, '0001437095518', '78.787.107.8-722.000', NULL, NULL, NULL, '085787800076', 'valent.cute11@yahoo.com', '6472054506820014', 0, 'images/foto/93871626848874-non-pns-1.jpg', 'aktif', NULL, NULL),
(112, 2, 2, 33, NULL, NULL, 2, NULL, 'OSI PUTRI FATMAWATI, SE', 'JL. DANAU POSO RT. 026 NO. 33 KELURAHAN SUNGAI PINANG LUAR KECAMATAN SAMARINDA KOTA', 'SAMARINDA', '1994-07-24', 'Perempuan', NULL, '-', '80.406.028.3-728.000', NULL, NULL, NULL, '082157222234', 'osypfm@yahoo.com', '-', 0, 'images/foto/64881626851113-osi-putri-fatmawati.jpg', 'aktif', NULL, NULL),
(113, 4, 3, 44, NULL, NULL, 2, '2014.01.01.1338', 'Lelly Listiarindi', '-', 'Samarinda', '1994-04-01', 'Perempuan', NULL, '-', '73.346.015.8-722.000', NULL, NULL, NULL, '082158207951', 'lellylistrarindi.1994@gmail.com', '6472054104930011', 0, 'images/foto/27581626848812-lelly-listiarindi.jpg', 'aktif', NULL, NULL),
(114, 2, 2, 33, NULL, NULL, 2, NULL, 'AHMAD MAULANA', 'JL. KH. AGUS SALIM GANG TANJUNG RT. 030 KELURAHAN SUNGAI PINANG LUAR SAMARINDA', 'SAMARINDA', '2000-04-09', 'Laki-Laki', NULL, '0002226982746', '92.465.663.0-722.000', NULL, NULL, NULL, '083140968090', 'ahmdmaulana2808@gmail.com', '-', 0, 'images/foto/24791626851042-ahmad-maulana.jpg', 'aktif', NULL, NULL),
(115, 2, 2, 33, NULL, NULL, 2, NULL, 'GEDE PUTRA SEBRANG', 'JL. WOLTERMONGINSIDI GANG 7 RT. 022 KELURAHAN DADI MULYA KECAMATAN SAMARINDA ULU', 'SAMARINDA', '1991-01-20', 'Laki-Laki', NULL, '19061545653', '92.479.695.6-741.000', NULL, NULL, NULL, '082154517306', 'dedeputrasebrang21@gmail.com', '-', 0, 'images/foto/66901626850804-gede-putra-sebrang.jpg', 'aktif', NULL, NULL),
(116, 2, 3, 44, NULL, NULL, 2, '2014.01.01.1470', 'Shinta Wanda Dwian Dani, SE', '-', 'Samarinda', '1988-06-18', 'Perempuan', NULL, '0001154877254', '74.315.189.6-722.000', NULL, NULL, NULL, '08254255508', 'shinta.wanda88@yahoo.com', '6472045906880003', 0, 'images/foto/24081626848764-shinta-wanda-dwian-dani.jpg', 'aktif', NULL, NULL),
(117, 2, 2, 33, NULL, NULL, 2, NULL, 'AHMAD SYARIFUDDIN NOOR', 'JL. A.W. SYAHRANIE GANG H.SABRAN RT 009 KELURAHAN GUNUNG KELUA KECAMATAN SAMARINDA ULU', 'SAMARINDA', '1977-08-19', 'Laki-Laki', NULL, '0001930164017', '92.466.317.2-741.000', NULL, NULL, NULL, '085782581373', 'uddinjelawat@gmail.com', '-', 0, 'images/foto/40011626850745-ahmad-syarifuddin-noor.jpg', 'aktif', NULL, NULL),
(118, 4, 3, 44, NULL, NULL, 2, '2015.07.01.1572', 'Rona Firdaus', '-', 'Samarinda', '1987-02-13', 'Laki-Laki', NULL, '-', '80.142.036.5-722.000', NULL, NULL, NULL, '081350771551', 'ronafirdaus17@gmail.com', '6472041302870001', 0, 'images/foto/14431626313463-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(119, 2, 2, 33, NULL, NULL, 2, NULL, 'MUHAMMAD RIZKY ANANDA', 'JL. HOS COKROAMIOTO RT. 015 KELURAHAN BAQA KECAMATAN SAMARINDA SEBERANG', 'SAMARINDA', '2000-04-09', 'Laki-Laki', NULL, '0002076783579', '92.472.914.8-741.000', NULL, NULL, NULL, '082332659734', 'Anandakiki731@gmail.com', '-', 0, 'images/foto/45591626850680-m-rizky-ananda.jpg', 'aktif', NULL, NULL),
(120, 2, 2, 33, NULL, NULL, 2, NULL, 'EKA PURNAMASARI, S.Sos', 'JL. PGRI III BLOK A NO.36 KELURAHA TANAH MERAH KECAMATAN SAMARINDA UTARA', 'SAMARINDA', '1995-04-06', 'Perempuan', NULL, '0001190916483', '-', NULL, NULL, NULL, '081238315938', 'ekaterorita12@gamail.com', '-', 0, 'images/foto/22161626850581-eka-purnamasari.jpg', 'aktif', NULL, NULL),
(121, 2, 2, 33, NULL, NULL, 2, NULL, 'EDI PRASETYO', 'JL. MT HARYONO GANG 55 RT. 54 KELURAHAN AIR PUTIH KECAMATAN SAMARINDA ULU', 'SAMARINDA', '1983-07-29', 'Laki-Laki', NULL, '0001137436661', '92.206.876.2-741.000', NULL, NULL, NULL, '085250330967', 'edisinyo2@gmail.com', '-', 0, 'images/foto/85111626850519-edi-prasetyo.jpg', 'aktif', NULL, NULL),
(122, 3, 3, 44, NULL, NULL, 2, '2015.07.01.1619', 'Muhammad Nanda Ednadi, ST', '-', 'Samarinda', '1989-05-11', 'Laki-Laki', NULL, '-', '16.503.343.2-722.000', NULL, NULL, NULL, '081223641989', 'NDPREMIUMPERFUME@yahoo.com', '6472041105890002', 0, 'images/foto/47981626314032-whatsapp-image-2021-07-13-at-165848.jpeg', 'aktif', NULL, NULL),
(123, 2, 2, 33, NULL, NULL, 2, NULL, 'RENNA MEILINA, SE', '-', 'SAMARINDA', '1989-05-22', 'Perempuan', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/69001626314041-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(124, 4, 3, 44, NULL, NULL, 2, '2015.07.01.1633', 'Muhammad Rendy Rusdian, ST', '-', 'Samarinda', '1992-04-28', 'Laki-Laki', NULL, '0000120321819', '81.439.228.8-722.000', NULL, NULL, NULL, '08115528284', 'rusdianrendy28@yahoo.co.id', '6472032804920004', 0, 'images/foto/39511626848554-muhammad-rendy-rusdian.jpg', 'aktif', NULL, NULL),
(125, 3, 3, 44, NULL, NULL, 2, '2012.07.01.0983', 'Reny Afriani, S.Sos', '-', 'Samarinda', '1988-04-24', 'Perempuan', NULL, '0001629835975', '16.194.539.9-722.000', NULL, NULL, NULL, '08125315405', 'afriani.reny@gmail.com', '6472046404880001', 0, 'images/foto/3101626848472-reny-afriani.jpg', 'aktif', NULL, NULL),
(126, 5, 2, 34, NULL, NULL, 2, NULL, 'BAYU PRATAMA PUTRA, SE', 'JL. AW. SYAHRANI PERUM. VILLA TAMARA BLOK. O NO. 02 KEL. GUNUNG KELUA SAMARINDA ULU', 'Samarinda', '1988-04-17', 'Laki-Laki', NULL, '-', '74.316.081.4-722.000', NULL, NULL, NULL, '085215982345', 'bayuriska1709@gmail.com', '-', 0, 'images/foto/78621626314829-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(127, 2, 2, 35, NULL, NULL, 2, NULL, 'MEYLIZA ANISA PUTRI', 'JL. BIAWAN GANG 3 NO 74 RT 10 SAMARINDA', 'Samarinda', '1999-05-07', 'Perempuan', NULL, '0002479555451', '91.450.632.4-722.000', NULL, NULL, NULL, '082343317722', 'putrianisamelyliza@gmail.com', '-', 0, 'images/foto/40301626850139-meyliza-anisa-putri.jpg', 'aktif', NULL, NULL),
(128, 2, 2, 36, NULL, NULL, 2, NULL, 'NOVA DWI SAPTA NAIN SEVEN, S.TR.KOM', 'JL. SLAMET RIYADI GANG HIKMAH RT.05 KELURAHAN KARANG ASAM SAMARINDA', 'Tanjung Redeb', '1997-11-27', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '08124463265', 'novadwisaptans@gmail.com', '-', 0, 'images/foto/50231626840630-3x4.jpg', 'aktif', NULL, NULL),
(129, 5, 2, 37, NULL, NULL, 3, NULL, 'ANDRY KRISTYANTO A N, ST', 'JL. D.I PANJAITAN NO 30 RT 067 KEL. SUNGAI PINANG DALAM KEC. SUNGAI PINANG SAMARINDA', 'Samarinda', '1997-12-17', 'Laki-Laki', NULL, '0002084157112', '16.164.184.0-722.000', NULL, NULL, NULL, '081347958094', '-', '-', 0, 'images/foto/34681626850081-andry-kristyanto.jpg', 'aktif', NULL, NULL),
(130, 5, 2, 38, NULL, NULL, 2, NULL, 'AMIR RACHMAN, A.Md', 'JL. PELITA 3 RT 012 KELURAHAN SAMBUTAN KECAMATAN SAMBUTAN SAMARINDA', 'Samarinda', '1978-07-15', 'Laki-Laki', NULL, '0001444881475', '26.042.037.7-722.000', NULL, NULL, NULL, '081350419110', '-', '-', 0, 'images/foto/25541626850007-amir-rachman.jpg', 'aktif', NULL, NULL),
(131, 5, 2, 38, NULL, NULL, 2, NULL, 'SUWARDI', 'JL. DUSUN REJO MAKMUR RT 003 KELURAHAN KARANG TUNGGAL KEC. TENGGARONG SEBERANG', 'Samarinda', '1969-09-13', 'Laki-Laki', NULL, '-', '74.374.577.0-728.000', NULL, NULL, NULL, '081253223488', 'Suwardiperkim@gmail.com', '-', 0, 'images/foto/66711626849904-suwardi.jpg', 'aktif', NULL, NULL),
(132, 5, 2, 38, NULL, NULL, 2, NULL, 'ASKARITO', 'JL. A.W SYAHRANI GANG 3B RT.23 KELURAHAN AIR HITAM KECAMATAN SAMARINDA ULU', 'Samarinda', '2000-12-20', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '082287009106', 'askarito788@gmail.com', '-', 0, 'images/foto/6631626849878-askarito.jpg', 'aktif', NULL, NULL),
(133, 5, 2, 38, NULL, NULL, 2, NULL, 'AHMAD AULIYADIN, A.Md.T', 'JL. PERJUANGAN GANG LESTARI RT.103 KELURAHAN SUNGAI PINANG DALAM SAMARINDA 75117', 'Samarinda', '1998-05-03', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/36141626849840-ahmad-auliyadin.jpg', 'aktif', NULL, NULL),
(134, 5, 2, 38, NULL, NULL, 2, NULL, 'AZIZ KHOIRUDIN', 'JL. JUANDA 79 A RT.003 KELURAHAN AIR HITAM KECAMATAN SAMARINDA ULU', 'Surakarta', '1994-10-18', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '081348511489', 'Azizkhoirudin77@gmail.com', '-', 0, 'images/foto/78191626317700-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(135, 5, 2, 38, NULL, NULL, 2, NULL, 'ZAINAL ABIDIN, A.Md.T', 'JL. SITI AISYAH KELURAHAN TELUK LERONG SAMARINDA', 'Sanggulan', '1995-12-02', 'Laki-Laki', NULL, '0001923220236', '-', NULL, NULL, NULL, '082156252127', 'zainalabidin.16612026@gmail.com', '-', 0, 'images/foto/7221626849597-zainal-abidin.jpg', 'aktif', NULL, NULL),
(136, 5, 2, 38, NULL, NULL, 2, NULL, 'ARMAWAN, A.Md.T.', 'JL. PAHLAWAN 2  RT.29 RW.01 KELURAHAN DADI MULYA KECAMATAN SAMARINDA ULU', 'Samarinda', '1997-12-01', 'Laki-Laki', NULL, '0000123123339', '-', NULL, NULL, NULL, '083140807001', 'armawanar@gmail.com', '-', 0, 'images/foto/63451626849381-armawan.jpg', 'aktif', NULL, NULL),
(137, 5, 2, 38, NULL, NULL, 2, NULL, 'ISWAHYUDI ESA DHARMAWAN', 'JL. BATU CERMIN RT.04 KELURAHAN SEMPAJA UTARA  KECAMATAN SAMARINDA UTARA', 'Jombang', '2000-07-16', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '085386660421', 'iswahyudiesa046@gamil.com', '-', 0, 'images/foto/19151626849196-iswahyudi-esa.jpg', 'aktif', NULL, NULL),
(138, 5, 2, 38, NULL, NULL, 2, NULL, 'ADYTIYA IRWANDA ROHIMIN', 'JL. WOLTER MONGINSIDI GANG 7 RT.021 KELURAHAN DADI MULYA KECAMATAN SAMARINDA ULU', 'Tulungagung', '1998-04-19', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/92661626849050-adytya-irwanda-rohimin.jpg', 'aktif', NULL, NULL),
(139, 2, 2, 39, NULL, NULL, 2, NULL, 'M. RYU ANDHIKA RAHMAN', 'JL. KH. AGUS SALIM GANG TANJUNG RT. 036 NO. 19  KEL. SUNGAI PINANG LUAR SAMARINDA', 'Samarinda', '1999-05-11', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/33851626849014-m-ryu-andhika-rahman.jpg', 'aktif', NULL, NULL),
(140, 2, 2, 40, NULL, NULL, 2, NULL, 'SAMPURNO', 'JL. SERINDIT I  RT.25 KELURAHAN BANDARA KECAMATAN SAMARINDA UTARA', 'Samarinda', '1978-11-05', 'Laki-Laki', NULL, '190615405596', '86.492.727.2-722.000', NULL, NULL, NULL, '081296143948', '-', '-', 0, 'images/foto/55271626319782-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(141, 2, 2, 40, NULL, NULL, 2, NULL, 'BAKTI SADAM', 'JL. MANUNGGAL RT. 13 NO. 39 KELURAHAN LOA BAKUNG KECAMATAN SUNGAI KUNJANG', 'Samarinda', '1991-03-02', 'Laki-Laki', NULL, '0002266527925', '77.978.396.8-722.000', NULL, NULL, NULL, '085845282756', '-', '-', 0, 'images/foto/81151626849435-bakti-sadam.jpg', 'aktif', NULL, NULL),
(142, 2, 2, 40, NULL, NULL, 2, NULL, 'MUHAMMAD FIRNANDA', 'JL. JUANDA 8, BELIMBING 10 NO. 2 RT. 07 KELURAHAN AIR HITAM KECAMATAN SAMARINDA ULU', 'Samarinda', '1999-03-25', 'Laki-Laki', NULL, '-', '92.479.947.1-741.000', NULL, NULL, NULL, '082152370856', '-', '-', 0, 'images/foto/70991626320457-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(143, 5, 2, 41, NULL, NULL, 2, NULL, 'WARYO', 'JL. SERAYU RT.020 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Cilacap', '1975-02-08', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/14981626320837-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(144, 5, 2, 41, NULL, NULL, 1, NULL, 'H. MUHAMMAD', 'DESA HAUR GADING NO.47 RT.002 RW.001 KEL. HAUR GADING KEC. HAUR GADING KALSEL', 'Teluk Baru', '1966-02-10', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/91131626321020-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(145, 5, 2, 42, NULL, NULL, 2, NULL, 'SUPRIANTO', 'JL. SERAYU RT.020 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Ciamis', '1980-08-23', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, '', 'aktif', NULL, NULL),
(146, 5, 2, 42, NULL, NULL, 2, NULL, 'WARSITO', 'JL. SERAYU RT.020 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Samarinda', '1981-09-18', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/15371626321629-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(147, 5, 2, 42, NULL, NULL, 2, NULL, 'MUSMULIADI', 'JL. SERAYU RT.020 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Jalang', '1970-02-02', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/31751626321851-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(148, 5, 2, 42, NULL, NULL, 2, NULL, 'TRIYONO', 'JL. GIRI MUKTI RT.018 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Samarinda', '1977-06-09', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/83761626321977-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(149, 5, 2, 42, NULL, NULL, 2, NULL, 'NUR HUDA', 'JL. GIRI MUKTI RT.18 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Samarinda', '1986-06-16', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/37541626322139-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL);
INSERT INTO `pegawai` (`id_pegawai`, `id_bidang`, `id_status_pegawai`, `id_jabatan`, `id_golongan`, `id_eselon`, `id_agama`, `nip`, `nama`, `alamat`, `tempat_lahir`, `tgl_lahir`, `jenis_kelamin`, `karpeg`, `bpjs`, `npwp`, `tmt_golongan`, `tmt_cpns`, `tmt_jabatan`, `no_hp`, `email`, `no_ktp`, `gaji_pokok`, `foto`, `status_kerja`, `id_user`, `updated_at`) VALUES
(150, 5, 2, 42, NULL, NULL, 2, NULL, 'DIKI ARIYANTO', 'JL. CITANDUY RT.024 KELURAHAN TANAH MERAH, KECAMATAN SAMARINDA UTARA, SAMARINDA', 'Samarinda', '1997-01-12', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/841626322287-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL),
(151, 2, 2, 43, NULL, NULL, 2, NULL, 'MUHAMMAD FAHRIZAL IRFANDI, S.Kom.', 'JL. KH. USMAN IBRAHIM BLOK M NO.71 RT.16 KELURAHAN PELITA SAMARINDA.', 'Samarinda', '1998-04-18', 'Laki-Laki', NULL, '0001166229797', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/78291626847488-muhammad-fahrizal.jpg', 'aktif', NULL, NULL),
(152, 2, 2, 36, NULL, NULL, 2, NULL, 'LYNTOM IRFAN DARMAWAN, S.Tr.Kom.', 'JL. RAJAWALI DALAM 2 NO. 55 A RT.11 KELURAHAN SUNGAI PINANG DALAM SAMARINDA.', 'Samarinda', '1998-12-10', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/32391626325427-swafoto.jpg', 'aktif', NULL, NULL),
(153, 5, 2, 42, NULL, NULL, 2, NULL, 'HAJI SABILARRUSDI', 'Jl. Desa Haur Gading No.47 RT.002 RW.001 Kelurahan Haur Gading Kalimantan Selatan', 'Mekkah', '1990-07-19', 'Laki-Laki', NULL, '-', '-', NULL, NULL, NULL, '-', '-', '-', 0, 'images/foto/38941626323043-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', 'aktif', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pendidikan`
--

CREATE TABLE `pendidikan` (
  `id_pendidikan` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `jenjang` varchar(20) NOT NULL,
  `nama_akademi` varchar(80) NOT NULL,
  `jurusan` varchar(40) NOT NULL,
  `no_ijazah` varchar(50) DEFAULT NULL,
  `tahun_lulus` varchar(6) NOT NULL,
  `foto_ijazah` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pendidikan`
--

INSERT INTO `pendidikan` (`id_pendidikan`, `id_pegawai`, `jenjang`, `nama_akademi`, `jurusan`, `no_ijazah`, `tahun_lulus`, `foto_ijazah`) VALUES
(1, 1, 'S2', 'Institut Teknologi Bandung', 'Magister Manajemen', '281024/KOI/PP.3.6.2/', '2002', 'images/ijazah/34101625994530-R_DIKUM281024KOIPP362-0.pdf\r'),
(2, 2, 'S2', 'Universitas 17 Agustus', 'Ilmu Manajemen', '003/MTS-ll/XII/2003', '2003', 'images/ijazah/44741625994530-R_DIKUM003MTS-IIXII2003-0.pdf\r'),
(3, 3, 'S2', 'Magister Sains Universitas Mulawarman', 'Magister Manajemen', '056/UN17.12/S2/2011', '2011', 'images/ijazah/95111625994530-R_DIKUM056UN1712S22011-0.pdf\r'),
(4, 4, 'S2', 'Universitas 17 Agustus', 'Teknik Sipil', '102/MTS.I.VI/2004', '2004', 'images/ijazah/76531625994530-R_DIKUM102MTSIVI2004-0.pdf\r'),
(5, 5, 'S2', 'Magister Sains Universitas Mulawarman', 'Magister Science/Sains', '126/UN17.12/S2/2012', '2010', 'images/ijazah/59991625994530-R_DIKUM126UN1712S22012-0.pdf\r'),
(6, 6, 'S1', 'STTNAS Yogya', 'Teknik  Geologi', '0144/0008-PS.IA/G.S1/1999', '1999', 'images/ijazah/32291625994530-R_DIKUM01440008-PSIAGS11999-0.pdf\r'),
(7, 7, 'S2', '-', 'Arsitektur', '-', '2003', 'images/ijazah/29911626225954-ini-ijazah-sementara.pdf'),
(8, 8, 'S2', 'Unmul Samarinda', 'Magister Manajemen', '267/UN17.1/S2/2016', '2016', 'images/ijazah/60261625994530-R_DIKUM267UN171S22016-0.pdf\r'),
(9, 9, 'S1', 'Universitas Pembangunan Nasional', 'Kimia', '1944/ST/TK', '1996', 'images/ijazah/49951626226793-ini-ijazah-sementara.pdf'),
(10, 10, 'S1', 'STIE Muhammadiyah Samarinda', 'Ekonomi', '1297/M.I/2004', '2004', 'images/ijazah/61491625994530-R_DIKUM1297MI2004-0.pdf\r'),
(11, 11, 'S1', 'Institut Teknologi Nasional Malang', 'Teknik Sipil Arsitektur', 'ITN-023/T.A/S.1/T01', '2001', 'images/ijazah/39631625994530-null.pdf\r'),
(12, 12, 'S1', 'Universitas Mulawarman', 'Pertanian', '6124/PT.20/05/S1/93', '1993', 'images/ijazah/85541625994530-null.pdf\r'),
(13, 13, 'S1', 'Universitas Mulawarman', 'Hama Dan Penyakit Tanaman', '391/J171.23/S1/2000', '2000', 'images/ijazah/75201625994530-R_DIKUM391J17123S12000-0.pdf\r'),
(14, 14, 'S1', 'ITN Malang', 'Teknik Sipil Arsitektur', '122/TA/S1/II\'97', '1997', 'images/ijazah/87201625994530-null.pdf\r'),
(15, 15, '-', '-', '-', '-', '-', 'images/ijazah/11051625994530-null.pdf\r'),
(16, 16, 'S1', 'ITN Malang', 'Teknik  Arsitektur', 'itn-048/', '2006', 'images/ijazah/92541625994530-R_DIKUMitn-048-0.pdf\r'),
(17, 17, 'S1', 'STIMI Samarinda', 'Ekonomi', '384/S.1/M/07', '2007', 'images/ijazah/92201625994530-R_DIKUM384S1M07-0.pdf\r'),
(18, 18, 'SMA/MA/SMK', 'SMK Pelayaran Sinar Bahari', 'Kejuruan', 'DN-16 Mk 0639561', '2003', 'images/ijazah/77831625994530-R_DIKUMDN-16Mk0639561-0.pdf\r'),
(19, 19, 'SMA/MA/SMK', 'Madrasah Aliyah Negeri 1 Samarinda', '-', 'EIV/q/MA-150/115/200', '2001', 'images/ijazah/39081625994530-R_DIKUMEIVqMA-1501152001-0.pdf\r'),
(20, 20, 'SMA/MA/SMK', 'SMK Canda Bhirawa Pare', 'STM Bangunan', '04.ob.092100122003', '1997', 'images/ijazah/42081625994530-R_DIKUM04ob092100122003-0.pdf\r'),
(21, 21, 'SMA/MA/SMK', 'SMK PGRI 5 Samarinda', 'SLTA Umum', 'DN-16 Mk 0703333', '2004', 'images/ijazah/52651625994530-R_DIKUMDN-16Mk0703333-0.pdf\r'),
(22, 22, 'S2', 'Universitas Mulawarman Samarinda', 'Ilmu Administrasi Negara', '048/UN17.2/S2/2019', '2019', 'images/ijazah/69471625994530-R_DIKUM5706UN17Q2012-0.pdf\r'),
(23, 23, 'SMA/MA/SMK', 'SMA Swasta Yayasan Pendidikan Patra Dharma', 'Sekolah Menengah Atas', '26 Mu 0358293', '2002', 'images/ijazah/79401625994530-R_DIKUM26Mu0358293-0.pdf\r'),
(24, 24, 'D3', 'STIMIK Samarinda', 'Diploma III', '129/MI-D3/2002', '2002', 'images/ijazah/85001625994530-R_DIKUM129MI-D32002-0.pdf\r'),
(25, 25, 'D3', 'Politeknik Negeri Samarinda', 'Diploma III', 'E.6/N20.R/SP-D3/2003', '2003', 'images/ijazah/31711625994530-R_DIKUME6N20RSP-D32003-0.pdf\r'),
(26, 26, 'SMA/MA/SMK', 'SMK PGRI 1 Samarinda', 'SLTA Kejuruan', 'DN-16 Mk 0638033', '2003', 'images/ijazah/72141625994530-R_DIKUMDN-16Mk0638033-0.pdf\r'),
(27, 27, 'S1', 'Universitas Atma Jaya Makassar', 'Sarjana', '02389.0421.03.01.2002', '2002', 'images/ijazah/52031625994530-R_DIKUM02389042103012002-0.pdf\r'),
(28, 28, 'S1', 'Untag Samarinda', 'Manajemen Hutan', '22327', '1999', 'images/ijazah/71881625994530-null.pdf\r'),
(29, 29, '-', '-', '-', '-', '-', 'images/ijazah/82001625994530-null.pdf\r'),
(30, 30, 'S1', 'Untag Samarinda', 'Teknik Sipil', '5037/UN.17/Q/2010', '2010', 'images/ijazah/48571625994530-R_DIKUM5037UN17Q2010-0.pdf\r'),
(31, 31, 'S1', 'Universitas Sriwijaya', 'Teknik Sipil', '61670032006', '2006', 'images/ijazah/45011625994530-R_DIKUM061670032006-0.pdf\r'),
(32, 32, 'D3', 'Politeknik Negeri Samarinda', 'Desain Produk', 'PD.14/N20/SP-D3/2005', '2005', 'images/ijazah/66521625994530-R_DIKUMPD14N20SP-D32005-1.pdf\r'),
(33, 33, 'SMA/MA/SMK', 'SMU N 3 Samarinda', 'Sekolah Menengah Atas', '26 OB of 103 446028', '1997', 'images/ijazah/14811625994530-R_DIKUM26OBof103446028-0.pdf\r'),
(34, 34, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Teknik Sipil', '5559/UN.17/Q/2011', '2011', 'images/ijazah/40081625994530-R_DIKUM5559UN17Q2011-0.pdf\r'),
(35, 35, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Teknik Sipil', '4453/FT/Q/2009', '2009', 'images/ijazah/20601625994530-R_DIKUM4453FTQ2009-0.pdf\r'),
(36, 36, 'S1', 'Universitas Diponegoro', 'Teknik Sipil', '12007/ST', '2009', 'images/ijazah/47461625994530-R_DIKUM12007ST-0.pdf\r'),
(37, 37, 'S1', 'ITN Malang', 'Teknik Sipil Planologi', 'ITN.012/T.PL/S.1/I-03', '2003', 'images/ijazah/12291625994530-R_DIKUMITN012TPLS1I-03-0.pdf\r'),
(38, 38, 'S1', 'Untag Samarinda', 'Teknik Sipil', '3244/FT/Q/2006', '2006', 'images/ijazah/86881625994530-R_DIKUM3244FTQ2006-0.pdf\r'),
(39, 39, 'S1', 'Untag Samarinda', 'Teknik Sipil', '5482/UN.17/Q/2011', '2011', 'images/ijazah/68521625994530-R_DIKUM5482UN17Q2011-0.pdf\r'),
(40, 40, 'S1', 'Untag Samarinda', 'Teknik Sipil', '2207/FT/Q/2004', '2004', 'images/ijazah/39571625994530-R_DIKUM2207FTQ2004-0.pdf\r'),
(41, 41, 'S1', 'Universitas Brawijaya', 'Teknik Sipil', '11197/UB/FT/S1/2009', '2009', 'images/ijazah/12891625994530-R_DIKUM11197UBFTS12009-0.pdf\r'),
(42, 42, 'S1', 'Universitas Diponegoro', 'Teknik Sipil', '11649/ST', '2008', 'images/ijazah/58491625994530-R_DIKUM102MTSIVI2004-0.pdf\r'),
(43, 43, 'D3', 'Politeknik Negeri Samarinda', 'Teknik Arsitektur', 'Ar. 014/K18/DS-D3/2009', '2009', 'images/ijazah/33581625994530-R_DIKUMAr014K18DS-D32009-0.pdf\r'),
(44, 44, 'S1', 'SMK Swasta Muhammadiyah 2 Samarinda', 'SLTA Umum', '26 Mk 257 0121795', '1999', 'images/ijazah/27251625994530-R_DIKUM26Mk2570121795-0.pdf\r'),
(45, 45, 'SMA/MA/SMK', 'SMU Negeri 5 Samarinda', 'Sekolah Menengah Atas', 'No.26 Mu 103 0451327', '1998', 'images/ijazah/69831625994530-R_DIKUMNo26Mu1030451327-0.pdf\r'),
(46, 46, 'D3', 'Universitas Hasanuddin', 'Teknik Arsitektur', '77075-J.04-D/3385-510-2002', '2002', 'images/ijazah/86981625994530-R_DIKUM77075-J04-D3385-510-2002-0.pdf\r'),
(47, 47, 'S1', 'Unlam Banjarmasin', 'Teknik Arsitektur', '29937/H8/PS.08/S1/2008', '2008', 'images/ijazah/99911625994530-R_DIKUM29937H8PS08S12008-0.pdf\r'),
(48, 48, 'S2', 'Universitas Gajah Mada', 'Magister Teknik', '2214/M.T/08', '2008', 'images/ijazah/33761625994530-R_DIKUM2214MT08-0.pdf\r'),
(49, 49, 'SMA/MA/SMK', 'STM Negri Bangunan', 'STM Bangunan', '26 OC ou 0077536', '1984', 'images/ijazah/47351625994530-null.pdf\r'),
(50, 50, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Teknik Sipil', '4041/FT/Q/2008', '2008', 'images/ijazah/58091625994530-R_DIKUM4041FTQ2008-0.pdf\r'),
(51, 51, 'D3', 'Unmul Samarinda', 'Ekonomi Akutansi', '153/J17.1.12/D3/2000', '2000', 'images/ijazah/31301625994530-R_DIKUM153J17112D32000-0.pdf\r'),
(52, 52, 'SMA/MA/SMK', 'SMA Negri 2 Samarinda', 'SLTA Umum', 'DN-16Mk 06022780', '2005', 'images/ijazah/37061625994530-R_DIKUMDN-16Mk0602780-0.pdf\r'),
(53, 53, 'SMA/MA/SMK', 'SMK Negri 2', 'STM Listrik Umum', '26 Mk 0325349', '2000', 'images/ijazah/88671625994530-R_DIKUM26Mk0325349-0.pdf\r'),
(54, 54, 'S1', 'Universitas 17 Agustus 1945', 'Teknik Sipil', '2181/FT/Q/2004', '2004', 'images/ijazah/27861625994530-null.pdf\r'),
(55, 55, 'S1', 'Universitas 17 Agustus 1945', 'Teknik Sipil', '1320/FT/Q/2002', '2002', 'images/ijazah/17271625994530-null.pdf\r'),
(56, 56, 'SMA/MA/SMK', 'SMA Negri 2 Balikpapan', 'SLTA Umum', '17 OB oe 0136545', '1996', 'images/ijazah/85571625994530-R_DIKUM17OBoe0136545-0.pdf\r'),
(57, 57, 'S1', 'Universitas Mulawarman', 'Ekonomi Akutansi', '191/J17.1.12/S1/2003', '2003', 'images/ijazah/30251625994530-null.pdf\r'),
(58, 1, 'S1', 'Institut Teknologi Nasional Malang', '-', '073/TS/S1/I-89', '1989', 'images/ijazah/4571626152049-ini-ijazah-sementara.pdf'),
(59, 1, 'sma/ma/smk', 'SMA Negeri 1 Samarinda', '-', '26 OC oh 0063430', '1984', 'images/ijazah/42581626152463-ini-ijazah-sementara.pdf'),
(60, 1, 'smp', 'SMP Negeri 1 Samarinda', '-', '26 Bob 0269285', '1981', 'images/ijazah/97641626152663-ini-ijazah-sementara.pdf'),
(61, 1, 'sd', 'SD Negeri Muhammadiyah No.1', '-', 'XX Aa 02506', '1977', 'images/ijazah/33501626152978-ini-ijazah-sementara.pdf'),
(62, 58, 'S1', 'Universitas 17 Agustus 1945 Samarinda', '-', '-', '2008', ''),
(63, 2, 'S1', 'UNIVERSITAS 17 AGUSTUS', 'Teknik Sipil', '369/FT/Q/00', '2000', 'images/ijazah/62911626153925-ini-ijazah-sementara.pdf'),
(64, 2, 'sma/ma/smk', 'SMA Negeri 1', 'Biologi', '2b Ocau 004940', '1983', 'images/ijazah/39501626154630-ini-ijazah-sementara.pdf'),
(65, 2, 'smp', 'SMP Negri', '-', 'XXBe.197052', '1980', 'images/ijazah/17521626154798-ini-ijazah-sementara.pdf'),
(66, 2, 'sd', 'SDN NO.045', '-', 'XXAa.05782', '1976', 'images/ijazah/78681626154886-ini-ijazah-sementara.pdf'),
(67, 30, 'sma/ma/smk', '-', '-', '-', '0', 'images/ijazah/59331626155363-ini-ijazah-sementara.pdf'),
(68, 34, 'sma/ma/smk', '-', 'Bangunan', '0', '2000', 'images/ijazah/68921626156130-ini-ijazah-sementara.pdf'),
(69, 35, 'sma/ma/smk', '-', '-', '-', '1998', 'images/ijazah/87081626156328-ini-ijazah-sementara.pdf'),
(70, 9, 'sma/ma/smk', 'SMAN 2 Samarinda', '-', 'No.26 OC oc 0138576', '1987', 'images/ijazah/78591626156497-ini-ijazah-sementara.pdf'),
(71, 9, 'smp', 'SMPN 2 Palang karaya', '-', 'No.26.OB.ob1372877', '1984', 'images/ijazah/78861626156557-ini-ijazah-sementara.pdf'),
(72, 9, 'sd', 'SDN Palangka Raya I', '-', 'XXVOAoaNo.000311', '1981', 'images/ijazah/32101626156615-ini-ijazah-sementara.pdf'),
(73, 3, 'S1', 'UNIVERSITAS ACHMAD YANI', 'Teknik Sipil', '00114/F.TEK/1999', '1999', 'images/ijazah/64291626157157-r-dikum00114ftek1999-0.pdf'),
(74, 3, 'S1', 'UNIVERSITAS MULAWARMAN', '-', '823/PT20/06/D2/94', '1994', 'images/ijazah/71061626157260-ini-ijazah-sementara.pdf'),
(75, 61, 'S1', 'Universitas Mulawarman', 'Ilmu Pemerintahan', '-', '2009', ''),
(76, 3, 'sma/ma/smk', 'SMA Negeri 1', 'SMA', '26 OB os 0202657', '1991', 'images/ijazah/83801626157385-ini-ijazah-sementara.pdf'),
(77, 3, 'smp', 'SMP Negeri 2', '-', '26 OB ob 0522421', '1988', 'images/ijazah/42301626157468-ini-ijazah-sementara.pdf'),
(78, 3, 'sd', 'SDN NO.012', '-', '26 OA oa 003230', '1985', 'images/ijazah/27011626157566-ini-ijazah-sementara.pdf'),
(79, 11, 'sma/ma/smk', 'SMA Negeri 1 Samarinda', '-', '26 OB oe 08118487', '1994', 'images/ijazah/7371626157948-ini-ijazah-sementara.pdf'),
(80, 11, 'smp', 'SMP Negeri 2 Samarinda', '-', '26 OA ob 0512652', '1991', 'images/ijazah/2791626158050-ini-ijazah-sementara.pdf'),
(81, 11, 'sd', 'SD Negeri 009 Samarinda', '-', '26 OA oa 0000545', '1988', 'images/ijazah/73211626158099-ini-ijazah-sementara.pdf'),
(82, 13, 'sma/ma/smk', 'Sekolah Menengah Umum Tingkat Atas Negeri 1 Garut', '-', '02 OB oe 0161665', '1994', 'images/ijazah/8101626158408-ini-ijazah-sementara.pdf'),
(83, 13, 'smp', 'Sekolah Menengah Umum Tingkat Pertama Negeri 1 Gar', '-', '02 OA ob 1601939', '1991', 'images/ijazah/65051626158454-ini-ijazah-sementara.pdf'),
(84, 13, 'sd', 'Sekolah Dasar Negeri Leuwidaun 01 Garut', '-', '02 OA oa 0539483', '1988', 'images/ijazah/30341626158504-ini-ijazah-sementara.pdf'),
(85, 22, 'S1', 'Universitas 17 Agustus 1945 Samaarinda', 'Ilmu Hukum', '5706/UN.17/Q/2012', '2012', 'images/ijazah/97491626158543-ini-ijazah-sementara.pdf'),
(86, 22, 'sma/ma/smk', 'SMK Negeri  2', '-', '-', '2001', 'images/ijazah/47541626158840-ini-ijazah-sementara.pdf'),
(87, 39, 'sma/ma/smk', '-', '-', '-', '2001', 'images/ijazah/99441626158869-ini-ijazah-sementara.pdf'),
(88, 22, 'smp', 'SMP Negeri 7', '-', '-', '1995', 'images/ijazah/22491626158949-ini-ijazah-sementara.pdf'),
(89, 22, 'sd', '-', '-', '-', '1995', 'images/ijazah/21321626159005-ini-ijazah-sementara.pdf'),
(90, 26, 'smp', 'SLTP NEGERI 3', '-', '-', '2000', 'images/ijazah/80011626159720-ini-ijazah-sementara.pdf'),
(91, 26, 'sd', 'SD NEGERI 001', '-', '26 OA oa 0008367', '1997', 'images/ijazah/12471626228255-ini-ijazah-sementara.pdf'),
(92, 45, 'smp', 'SMP N 4 Samarinda', 'SMP', 'No. 26 OA ob 0290445', '1995', 'images/ijazah/42091626168522-ijazah-sementara.pdf'),
(93, 45, 'sd', 'SD Negeri 004 Samarinda Ilir', 'SD', 'No. 26 OA oa 0003352', '1992', 'images/ijazah/79111626168665-ijazah-sementara.pdf'),
(94, 57, 'sma/ma/smk', 'SMA N 1 SAMARINDA', 'IPS', '26 OB oe 0463011', '1995', 'images/ijazah/18191626169035-ijazah-sementara.pdf'),
(95, 57, 'smp', 'SMP N 4', 'SMP', '26 OA ob 1502009', '1992', 'images/ijazah/43421626169143-ijazah-sementara.pdf'),
(96, 57, 'sd', 'SD N 008', 'SD', '26 OA oa 000490', '1989', 'images/ijazah/13071626169225-ijazah-sementara.pdf'),
(97, 5, 'S1', 'Universitas Lambung Mangkurat', 'Teknik Sipil', '02598/J08/PP.08/S1/9', '1999', 'images/ijazah/27841626169657-ijazah-sementara.pdf'),
(98, 5, 'sma/ma/smk', 'SMA Negeri 2 Samarinda', 'Sekolah Menengah Atas', '26 OB oe 0118549', '1994', 'images/ijazah/14651626169832-ijazah-sementara.pdf'),
(99, 5, 'smp', 'SMP Negeri 2 Samarinda', 'SMP', '26 OA ob 0512641', '1991', 'images/ijazah/36171626169906-ijazah-sementara.pdf'),
(100, 5, 'sd', 'SD Muhammadiyah No.3857 Samarinda', 'Sekolah Dasar', '26 OA oa 0005618', '1988', 'images/ijazah/74651626169995-ijazah-sementara.pdf'),
(102, 8, 'S2', 'Fakultas Ekonomi Universitas Mulawarman', '-', '267/UN17.1/S2/2016', '2016', 'images/ijazah/40551626178551-ijazah-sementara.pdf'),
(103, 8, 'S1', 'UNDIP', '-', 'U:06901/ST.PE', '2004', 'images/ijazah/2381626178758-ijazah-sementara.pdf'),
(104, 8, 'S1', 'UNIVERSITAS GADJAH MADA', '-', '2851/HYN-WBS/00/TA-D', '2000', 'images/ijazah/27931626178942-ijazah-sementara.pdf'),
(105, 8, 'sma/ma/smk', 'STM Negeri', '-', '26 OC ou 0002680', '1990', 'images/ijazah/56451626179732-ijazah-sementara.pdf'),
(106, 8, 'smp', 'SMP Negeri 8', '-', '26 OB ob 0469982', '1987', 'images/ijazah/1741626179929-ijazah-sementara.pdf'),
(107, 8, 'sd', 'SDN 001 SEBRANG', '-', '26 Oa oa 005214', '1984', 'images/ijazah/73411626180009-ijazah-sementara.pdf'),
(108, 12, 'sma/ma/smk', 'SMA NEGERI 1', '-', '26 OCch 0002831', '1986', 'images/ijazah/41551626180749-ijazah-sementara.pdf'),
(109, 12, 'smp', 'SMP NEGERI 4', '-', '26 OBob 0322537', '1983', 'images/ijazah/56601626180829-ijazah-sementara.pdf'),
(110, 12, 'sd', 'SDN NO.41', '-', 'XXAa 00933', '1980', 'images/ijazah/7641626180914-ijazah-sementara.pdf'),
(111, 14, 'sma/ma/smk', 'SMA Negeri 2 Samarinda', '-', '26 OB og 0379339', '1992', 'images/ijazah/38691626181488-ijazah-sementara.pdf'),
(112, 14, 'smp', 'SMP Negeri 2 Samarinda', '-', '26 OB ob 0572667', '1989', 'images/ijazah/17611626181540-ijazah-sementara.pdf'),
(113, 14, 'sd', 'SD Negeri 003 Kec. Sangkulirang', '-', '26 OA oa 0028828', '1986', 'images/ijazah/9661626181589-ijazah-sementara.pdf'),
(114, 50, 'sma/ma/smk', 'SMK 3 Tahun Samarinda Teknik Elektro', 'Teknik Elektro', 'DN-16.Mk 0638979', '2003', 'images/ijazah/15411626182056-ijazah-sementara.pdf'),
(115, 50, 'sma/ma/smk', '-', 'SLTA Kejuruan', '-', '2003', 'images/ijazah/8741626182153-ijazah-sementara.pdf'),
(116, 50, 'smp', 'SLTP Negeri 4 Samarinda Ulu', '-', '26 DI 2455833', '2000', 'images/ijazah/57641626182203-ijazah-sementara.pdf'),
(117, 50, 'sd', 'SD Negeri No.005 Samarinda Ulu', '-', '26 OA oa 0000233', '1997', 'images/ijazah/12751626182249-ijazah-sementara.pdf'),
(118, 53, 'smp', 'Sekolah Lanjutan Tingkat Pertama Negeri 20 Samarinda', '-', '26OAoe0007697', '1997', 'images/ijazah/15771626224910-ijazah-sementara.pdf'),
(119, 53, 'sd', 'SDN 002 Samarinda', '-', '26OAoa0009652', '1994', 'images/ijazah/73231626224970-ijazah-sementara.pdf'),
(120, 54, 'sma/ma/smk', '-', '-', '-', '0', 'images/ijazah/67441626225113-ijazah-sementara.pdf'),
(121, 10, 'sma/ma/smk', '-', '-', '-', '2000', 'images/ijazah/35171626226952-ini-ijazah-sementara.pdf'),
(122, 17, 'D3', '-', '-', '-', '2003', 'images/ijazah/16961626227205-ini-ijazah-sementara.pdf'),
(123, 4, 'S1', 'UNIVERSITAS 17 AGUSTUS', 'Teknik Sipil', '1022/FTY/Q/2001', '2001', 'images/ijazah/65461626228645-ini-ijazah-sementara.pdf'),
(124, 4, 'sma/ma/smk', 'Sekolah Menengah Atas Negeri 1 Blora', '-', '03 OC oh 0171595', '1985', 'images/ijazah/74901626228693-ini-ijazah-sementara.pdf'),
(125, 4, 'smp', 'Sekolah Menengah Umum Tingkat Pertama Negeri 1 Nga', '-', '03 OB ob 0818456', '1982', 'images/ijazah/66911626228857-ini-ijazah-sementara.pdf'),
(126, 4, 'sd', 'SDN', '-', 'XI.A.a No  080973', '1979', 'images/ijazah/24291626228921-ini-ijazah-sementara.pdf'),
(127, 6, 'sma/ma/smk', 'Sekolah Teknik Geologi Dan Pertambangan', 'Teknik Geologi D an Pertambangan', '-', '1999', 'images/ijazah/27171626229168-ini-ijazah-sementara.pdf'),
(128, 62, 'D3', 'Politeknik Negeri Samarinda', '-', '-', '2001', 'images/ijazah/29791626232188-ini-ijazah-sementara.pdf'),
(129, 63, '-', '-', '-', '-', '-', ''),
(130, 64, '-', 'Universitas Mulawarman', '-', '-', '2016', 'images/ijazah/77611626233212-ini-ijazah-sementara.pdf'),
(131, 65, '-', '-', '-', '-', '-', ''),
(132, 66, '-', '-', '-', '-', '-', ''),
(133, 67, 'S1', 'Universitas Muslim Indonesia', 'Teknik Sipil Arsitektur', '-', '2007', 'images/ijazah/39831626233786-ijazah-sementara.pdf'),
(134, 68, '-', '-', '-', '-', '-', ''),
(135, 69, 'S1', 'Universitas Mulawarman Samarinda', 'Ekonomi Manajemen', '-', '2008', 'images/ijazah/71626234201-ijazah-sementara.pdf'),
(136, 70, 'D3', 'Universitas Mulawarman', 'Ekonomi Akuntansi', '-', '2009', 'images/ijazah/74771626234582-ijazah-sementara.pdf'),
(137, 71, '-', '-', '-', '-', '-', ''),
(138, 72, 'sma/ma/smk', 'SMA Negeri 3 Samarinda', 'Biologi', '-', '1994', 'images/ijazah/9231626234808-ijazah-sementara.pdf'),
(139, 73, 'sma/ma/smk', 'SMA Negeri 11 Samarinda', '-', '-', '2006', ''),
(140, 74, 'sma/ma/smk', 'Diknas Kota Samarinda (Paket C Program IPS/Setara SLTA)', 'IPS', '-', '2014', ''),
(141, 75, 'S1', 'Institut Teknologi Malang', 'Teknik Sipil Arsitektur', '-', '2005', 'images/ijazah/38471626240760-ijazah-sementara.pdf'),
(142, 76, '-', 'Universitas Widya Gama Mahakam Samarinda', '-', '-', '2012', ''),
(143, 77, 'sma/ma/smk', 'SMK Nuri Samarinda', 'Administrasi Perkantoran', '-', '1999', 'images/ijazah/50341626240995-ijazah-sementara.pdf'),
(144, 78, 'sma/ma/smk', 'SMK Negeri 1 Samarinda', '-', '-', '2003', ''),
(145, 79, 'sma/ma/smk', 'STM Negeri Samarinda', 'Elektronika', '-', '1990', 'images/ijazah/78811626241197-ijazah-sementara.pdf'),
(146, 80, 'sma/ma/smk', 'SMK NURI Samarinda', 'Kejuruan', '-', '2005', 'images/ijazah/73361626241427-ijazah-sementara.pdf'),
(147, 81, 'sma/ma/smk', 'Diknas Kota Samarinda (Paket C Program IPS/Setara SLTA)', 'Paket C', '-', '2011', 'images/ijazah/46971626241630-ijazah-sementara.pdf'),
(148, 82, 'S2', 'Universitas Mulawarman (S.2 Ilmu Eko. Pembangunan)', 'Ilmu Eko. Pembangunan', '-', '2008', 'images/ijazah/74521626241856-ijazah-sementara.pdf'),
(152, 86, 'sma/ma/smk', 'SMA Negeri 8 Samarinda', 'Biologi', '-', '2007', 'images/ijazah/49621626243904-ini-ijazah-sementara.pdf'),
(153, 87, 'sma/ma/smk', 'SMK Nuri Samarinda', 'Kejuruan', '-', '2002', 'images/ijazah/14061626244320-ini-ijazah-sementara.pdf'),
(154, 88, 'D3', 'Universitas Mulawarman', 'Sekretaris Manajemen', '-', '2006', 'images/ijazah/53791626244592-ini-ijazah-sementara.pdf'),
(155, 89, 'S1', 'Univeritas Mulawarman', 'Manajemen Hutan', '-', '2007', 'images/ijazah/67501626244897-ini-ijazah-sementara.pdf'),
(156, 90, 'sma/ma/smk', 'SMK Negeri 5 Samarinda', 'Kejuruan', '-', '2005', 'images/ijazah/84931626245114-ini-ijazah-sementara.pdf'),
(157, 91, 'sma/ma/smk', 'SMA Negeri 9 Samarinda', 'Biologi', '-', '2008', 'images/ijazah/20781626245424-ini-ijazah-sementara.pdf'),
(158, 92, 'S1', 'Universitas Merdeka Malang', 'Teknik Arsitektur', '-', '2000', 'images/ijazah/13841626246036-ini-ijazah-sementara.pdf'),
(159, 93, 'sma/ma/smk', 'SMA Negeri 5 Samarinda', 'IPS', '-', '2004', 'images/ijazah/94001626246445-ini-ijazah-sementara.pdf'),
(160, 94, 'smp', 'Madrasah Tsanawiyah Negeri II Gambut', 'SLTP', '-', '1989', 'images/ijazah/62751626246732-ini-ijazah-sementara.pdf'),
(161, 95, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Administrasi Negara', '-', '2012', 'images/ijazah/62731626246935-ini-ijazah-sementara.pdf'),
(162, 96, 'sma/ma/smk', 'SMK Negeri 2 Samarinda', 'Kejuruan 4', '-', '2011', 'images/ijazah/8321626247189-ini-ijazah-sementara.pdf'),
(163, 97, 'sma/ma/smk', 'SMA Negeri 5 Samarinda', '-', '-', '2004', 'images/ijazah/34111626311391-ini-ijazah-sementara.pdf'),
(164, 98, 'sma/ma/smk', 'SMKN 4 Samarinda', '-', '-', '2012', 'images/ijazah/24231626311609-ini-ijazah-sementara.pdf'),
(165, 99, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Teknik Sipil', '-', '2009', 'images/ijazah/3471626311678-ijazah-sementara.pdf'),
(166, 100, 'sma/ma/smk', 'SMK PGRI I Samarinda', '-', '-', '2002', 'images/ijazah/87441626311799-ini-ijazah-sementara.pdf'),
(167, 101, 'sma/ma/smk', 'SMA Negeri 1 Kota Bangun', '-', '-', '2010', 'images/ijazah/77371626311952-ini-ijazah-sementara.pdf'),
(168, 102, 'S1', 'SMKN 1 Samarinda', 'Akuntansi', '-', '2011', 'images/ijazah/42661626311969-ijazah-sementara.pdf'),
(169, 103, '-', 'Universitas Mulawarman', '-', '-', '2017', 'images/ijazah/50711626312139-ini-ijazah-sementara.pdf'),
(170, 104, 'S1', 'Universitas Mulawarman', 'Ekonomi Manajemen', '-', '2010', 'images/ijazah/92721626312206-ijazah-sementara.pdf'),
(171, 105, '-', 'SMA Negeri 1 Samarinda', '-', '-', '2011', 'images/ijazah/94261626312332-ini-ijazah-sementara.pdf'),
(172, 106, 'S1', 'Institut Teknologi Pembangunan Surabaya', 'Teknik Sipil', '-', '2008', 'images/ijazah/11681626312400-ijazah-sementara.pdf'),
(173, 107, 'sma/ma/smk', 'SMK PGRI 1 Samarinda', '-', '-', '1996', 'images/ijazah/9331626312473-ini-ijazah-sementara.pdf'),
(174, 108, 'sma/ma/smk', 'SMA Negeri 1 Samarinda', 'IPS', '-', '1988', 'images/ijazah/79431626312625-ijazah-sementara.pdf'),
(175, 109, 'sma/ma/smk', 'SMK Negeri 4 Samarinda', '-', '-', '2018', 'images/ijazah/34071626312641-ini-ijazah-sementara.pdf'),
(176, 110, '-', 'Universitas Mulawarman Samarinsa', '-', '-', '2015', 'images/ijazah/54461626312790-ini-ijazah-sementara.pdf'),
(177, 111, 'S1', 'Universitas Mulawarman', 'Ekonomi Akuntansi', '-', '2006', 'images/ijazah/86091626312841-ijazah-sementara.pdf'),
(178, 112, '-', 'STIEM Samarinda', '-', '-', '2017', 'images/ijazah/491626312933-ini-ijazah-sementara.pdf'),
(179, 113, 'sma/ma/smk', 'SMA Negeri 2 Samarinda', 'IPS', '-', '2011', 'images/ijazah/72511626313093-ijazah-sementara.pdf'),
(180, 114, 'smp', 'SMP Negeri 45 Samarinda', '-', '-', '2017', 'images/ijazah/20191626313112-ini-ijazah-sementara.pdf'),
(181, 115, 'sma/ma/smk', 'SMK Negeri 9 Samarinda', '-', '-', '2009', 'images/ijazah/95521626313231-ini-ijazah-sementara.pdf'),
(182, 116, 'S1', 'Universitas Mulawarman', 'Manajemen', '-', '2013', 'images/ijazah/46611626313264-ijazah-sementara.pdf'),
(183, 117, 'sma/ma/smk', 'SMA Negeri 1 Samarinda', '-', '-', '1995', 'images/ijazah/10351626313385-ini-ijazah-sementara.pdf'),
(184, 118, 'sma/ma/smk', 'SMK Niagara', 'Penjualan', '-', '2006', 'images/ijazah/93071626313463-ijazah-sementara.pdf'),
(185, 119, '-', 'Madrasah Aliyah Al-Mujahidin Samarinda', '-', '-', '2018', 'images/ijazah/34641626313596-ini-ijazah-sementara.pdf'),
(186, 120, '-', '-', '-', '-', '-', 'images/ijazah/89311626313747-ini-ijazah-sementara.pdf'),
(187, 121, 'sma/ma/smk', 'SMK Nuri Samarinda', '-', '-', '2001', 'images/ijazah/95221626313906-ini-ijazah-sementara.pdf'),
(188, 122, 'S1', 'Universitas 17 Agustus 1945 Samarinda', 'Teknik Sipil', '-', '2011', 'images/ijazah/64041626314032-ijazah-sementara.pdf'),
(189, 123, '-', '-', '-', '-', '-', 'images/ijazah/77811626314041-ini-ijazah-sementara.pdf'),
(190, 124, 'S1', 'Institut Teknologi Nasional Malang', 'Teknik Sipil Planologi', '-', '2015', 'images/ijazah/85721626314215-ijazah-sementara.pdf'),
(191, 125, 'S1', 'SMA Negeri 11 Samarinda', 'Sosial', '-', '2005', 'images/ijazah/81371626314433-ijazah-sementara.pdf'),
(192, 126, '-', 'Universitas Widyagama Mahakam Samarinda', '-', '-', '2016', 'images/ijazah/87771626314829-ini-ijazah-sementara.pdf'),
(193, 127, 'sma/ma/smk', 'SMK Negeri 7 Samarinda', '-', '-', '2018', 'images/ijazah/81231626315111-ini-ijazah-sementara.pdf'),
(194, 128, '-', '-', '-', '-', '-', ''),
(195, 129, '-', 'Universitas Sanata Dharma Jogjakarta', '-', '-', '2004', 'images/ijazah/53671626315772-ini-ijazah-sementara.pdf'),
(196, 130, '-', 'Politeknik Negeri Samarinda', '-', '-', '2000', 'images/ijazah/2701626316522-ini-ijazah-sementara.pdf'),
(197, 131, 'sd', 'SD Negeri 050 Samarinda', '-', '-', '1987', 'images/ijazah/50221626316756-ini-ijazah-sementara.pdf'),
(198, 132, '-', '-', '-', '-', '-', ''),
(199, 133, '-', '-', '-', '-', '-', ''),
(200, 134, '-', '-', '-', '-', '-', ''),
(201, 135, '-', '-', '-', '-', '-', ''),
(202, 136, '-', '-', '-', '-', '-', ''),
(203, 137, '-', '-', '-', '-', '-', ''),
(204, 138, '-', '-', '-', '-', '-', ''),
(205, 139, '-', '-', '-', '-', '-', ''),
(206, 140, 'sma/ma/smk', 'SMK PGRI I Samarinda', '-', '-', '-', 'images/ijazah/92601626319782-ini-ijazah-sementara.pdf'),
(207, 141, 'sma/ma/smk', 'SMK Negeri 6 Samarinda', '-', '-', '2010', 'images/ijazah/95881626320240-ini-ijazah-sementara.pdf'),
(208, 142, 'sma/ma/smk', 'SMA Negeri 5 Samarinda', '-', '-', '2017', 'images/ijazah/13381626320457-ini-ijazah-sementara.pdf'),
(209, 143, '-', '-', '-', '-', '-', ''),
(210, 144, '-', '-', '-', '-', '-', ''),
(211, 145, '-', '-', '-', '-', '-', ''),
(212, 146, '-', '-', '-', '-', '-', ''),
(213, 147, '-', '-', '-', '-', '-', ''),
(214, 148, '-', '-', '-', '-', '-', ''),
(215, 149, '-', '-', '-', '-', '-', ''),
(216, 150, '-', '-', '-', '-', '-', ''),
(217, 151, '-', '-', '-', '-', '-', ''),
(218, 152, '-', '-', '-', '-', '-', ''),
(219, 153, '-', '-', '-', '-', '-', '');

-- --------------------------------------------------------

--
-- Table structure for table `penghargaan`
--

CREATE TABLE `penghargaan` (
  `id_penghargaan` int(11) NOT NULL,
  `id_pegawai` int(11) DEFAULT NULL,
  `nama_penerima` varchar(80) DEFAULT NULL,
  `nama_penghargaan` varchar(50) NOT NULL,
  `pemberi` varchar(80) NOT NULL,
  `tgl_penghargaan` date NOT NULL,
  `dokumentasi` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `penghargaan`
--

INSERT INTO `penghargaan` (`id_penghargaan`, `id_pegawai`, `nama_penerima`, `nama_penghargaan`, `pemberi`, `tgl_penghargaan`, `dokumentasi`) VALUES
(1, 1, NULL, 'SATYA LANCANA KARYA SATYA XX TAHUN', 'Presiden', '2015-11-09', 'images/dok_penghargaan/59181626153055-ini-ijazah-sementara.pdf'),
(2, 2, NULL, 'SATYALANCANA KARYA SATYA 10 TAHUN', 'PRESIDEN', '2009-01-21', 'images/dok_penghargaan/59011626154988-ini-ijazah-sementara.pdf'),
(3, 35, NULL, 'SUMPAH JANJI PNS', 'Walikota', '0001-01-01', ''),
(4, 3, NULL, 'SATYA LANCANA KARYA SATYA 10 TAHUN', 'Wakil Walikota', '2016-08-11', ''),
(5, 8, NULL, 'SATYA LANCANA KARYA SAFTA 20 TAHUN', 'Wakil Walikota', '2016-08-11', ''),
(6, 7, NULL, 'SATIYA LANCANA KARYA SATRYA 10 TAHUN', 'PRESIDEN', '2015-01-19', ''),
(7, 4, NULL, 'SATYA LANCANA KARYA SAFTA 20 TAHUN', 'Wakil Walikota', '2016-08-11', 'images/dok_penghargaan/10931626228992-ini-ijazah-sementara.pdf'),
(8, 4, NULL, 'SATYALANCANA KARYA SATYA 10 TAHUN', 'PRESIDEN', '2009-01-21', '');

-- --------------------------------------------------------

--
-- Table structure for table `pensiun`
--

CREATE TABLE `pensiun` (
  `id_pensiun` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `tgl_pensiun` date NOT NULL,
  `keterangan` text NOT NULL,
  `status_pensiun` int(11) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'lyntom', '2fb0826c6d49d69ff1202173cbd1ab2b4a0ba262264e472354de1607642da799', '[\"*\"]', '2021-07-11 06:42:15', '2021-07-11 05:33:12', '2021-07-11 06:42:15'),
(2, 'App\\Models\\User', 1, 'lyntom', '556b88ce910549b17e2251febe91dce6520c12f111a07dd4323c93b3a01bfa1d', '[\"*\"]', '2021-07-11 07:53:51', '2021-07-11 06:42:27', '2021-07-11 07:53:51'),
(3, 'App\\Models\\User', 2, 'nova', 'a58ee79975398089561d6275400aa17290b960ec2e59431eb55693bde7e705c5', '[\"*\"]', '2021-07-11 06:46:29', '2021-07-11 06:44:38', '2021-07-11 06:46:29'),
(4, 'App\\Models\\User', 2, 'nova', '761397b8019967dcfb74800662317f4ed2ef75e2204ba3b3a9d49d4753984273', '[\"*\"]', '2021-07-12 08:00:05', '2021-07-11 15:53:38', '2021-07-12 08:00:05'),
(6, 'App\\Models\\User', 2, 'nova', '55c4c6258505f829bca66cebc5f280dc610a7cebc14c9c9ddcab4f7b1f4f0c0a', '[\"*\"]', '2021-07-12 00:01:41', '2021-07-11 17:44:16', '2021-07-12 00:01:41'),
(7, 'App\\Models\\User', 1, 'lyntom', 'ce6775e43457253a05e5f6663cd02f0c4f7587e89f77c2a6f959cddeb2929c7d', '[\"*\"]', '2021-07-11 22:57:31', '2021-07-11 22:28:49', '2021-07-11 22:57:31'),
(8, 'App\\Models\\User', 5, '19651127 199301 1 001', '9399450d540a57c61d50d3111baf69d4accb62f4104f43f27c9371e9b088dede', '[\"*\"]', '2021-07-11 22:59:33', '2021-07-11 22:59:32', '2021-07-11 22:59:33'),
(9, 'App\\Models\\User', 1, 'lyntom', 'c82083ceb9b4d68cb8180361f3c6b18b9e685530bf6fb6e7cfe5ba4c08c463b8', '[\"*\"]', '2021-07-12 00:03:43', '2021-07-11 23:01:34', '2021-07-12 00:03:43'),
(10, 'App\\Models\\User', 2, 'nova', '9322188d8e7ebacee756f2db61c0cd95e9e8920ba5943637246e3ec9e24d36e2', '[\"*\"]', '2021-07-12 09:24:27', '2021-07-12 09:13:40', '2021-07-12 09:24:27'),
(12, 'App\\Models\\User', 1, 'lyntom', 'be6671a916b399bfe0d8977f91b8a2bad11a44d2bd08b78271a19179e2ca5ff4', '[\"*\"]', '2021-07-12 23:22:45', '2021-07-12 19:41:55', '2021-07-12 23:22:45'),
(13, 'App\\Models\\User', 2, 'nova', '206c2e6d3a70ddcdbe188a34e228d384a3a078569be7b68f73ff72a1edbb4da1', '[\"*\"]', '2021-07-12 20:10:11', '2021-07-12 19:46:45', '2021-07-12 20:10:11'),
(19, 'App\\Models\\User', 2, 'nova', '599d19aad4ddfea67333e46410c1d20a46d8ccf400043eb775ce689ead08dd42', '[\"*\"]', '2021-07-12 23:57:16', '2021-07-12 23:55:41', '2021-07-12 23:57:16'),
(20, 'App\\Models\\User', 2, 'nova', '3f4a55351282b3183d953a08feab18a215b5ba61690ba18050bc7354d11e13bf', '[\"*\"]', '2021-07-13 00:03:28', '2021-07-12 23:58:01', '2021-07-13 00:03:28'),
(21, 'App\\Models\\User', 1, 'lyntom', '0d674682bdeef808f0c5f635ac1460f739f1d0a0aa0bccebf001b609e717f10f', '[\"*\"]', '2021-07-13 16:13:17', '2021-07-13 16:12:53', '2021-07-13 16:13:17'),
(24, 'App\\Models\\User', 2, 'nova', '9f1dbb25cb1d3346aa4411dab0f4ec5d23f931fdc4aa144fd5b22dc1e191bd3f', '[\"*\"]', '2021-07-13 18:41:53', '2021-07-13 18:34:02', '2021-07-13 18:41:53'),
(25, 'App\\Models\\User', 4, 'pkl', 'a5dedd917194afef21b64bb14c12de0b19de7982f64a8976066b93bfb0909eba', '[\"*\"]', '2021-07-13 20:37:01', '2021-07-13 18:48:57', '2021-07-13 20:37:01'),
(30, 'App\\Models\\User', 2, 'nova', '4c7b7745962b71750728683cc4ea18ad0ff8c05ff75ccd47d057608dd9051890', '[\"*\"]', '2021-07-13 22:29:18', '2021-07-13 22:11:19', '2021-07-13 22:29:18'),
(33, 'App\\Models\\User', 4, 'pkl', 'ad01a2ac609fd6708d9e655a48555de67c59836418b773877cd6daea53160271', '[\"*\"]', '2021-07-14 17:54:04', '2021-07-14 17:03:19', '2021-07-14 17:54:04'),
(38, 'App\\Models\\User', 1, 'lyntom', '661640b366b16eef80c4cb73c529fbf85927dbf942300f45ebec4364e9f79b85', '[\"*\"]', '2021-07-14 21:06:38', '2021-07-14 21:00:46', '2021-07-14 21:06:38'),
(39, 'App\\Models\\User', 1, 'lyntom', 'cdcec54f7cf5951293abaf7b7bf913aaf00b96b0496240695a9a94ba5f7d0fee', '[\"*\"]', '2021-07-14 21:24:05', '2021-07-14 21:08:59', '2021-07-14 21:24:05'),
(42, 'App\\Models\\User', 4, 'pkl', '3f8e2a485fdb65f46b8c929a4fe5008e3be0bf5632ce067e873d80d16f74a12c', '[\"*\"]', '2021-07-16 19:32:10', '2021-07-16 19:30:10', '2021-07-16 19:32:10'),
(47, 'App\\Models\\User', 4, 'pkl', 'c3c2e834060b4cfde2359f7dff887769871296daadb8643a40e472f6d00ed191', '[\"*\"]', '2021-07-20 22:54:45', '2021-07-20 22:18:25', '2021-07-20 22:54:45'),
(48, 'App\\Models\\User', 2, 'nova', 'fcb403f5f1ec6a8f119e7a186dfbe922915bc9d933d90a2b0c790a8edb028994', '[\"*\"]', '2021-07-20 23:47:46', '2021-07-20 23:46:07', '2021-07-20 23:47:46'),
(49, 'App\\Models\\User', 2, 'nova', 'c3df49716feb3778ac8677e75f192ce70e976813e187f6d2762248ffc4d22bf7', '[\"*\"]', '2021-07-22 17:05:44', '2021-07-22 16:55:38', '2021-07-22 17:05:44'),
(50, 'App\\Models\\User', 4, 'pkl', '600965353d5303ef454c600a1d6a00b8bbe43e5936ea64ee4335217b500ef32a', '[\"*\"]', '2021-07-22 18:38:19', '2021-07-22 17:31:10', '2021-07-22 18:38:19'),
(52, 'App\\Models\\User', 2, 'nova', 'df1a1d79d634de671d3e29c9d7b759556bc3097db88929b26eba8296e7d7cf3f', '[\"*\"]', '2021-07-23 07:39:47', '2021-07-23 06:57:05', '2021-07-23 07:39:47');

-- --------------------------------------------------------

--
-- Table structure for table `pttb`
--

CREATE TABLE `pttb` (
  `id_pttb` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `nip` varchar(100) NOT NULL,
  `penetap_sk` varchar(80) NOT NULL,
  `tgl_penetapan_sk` date NOT NULL,
  `no_sk` varchar(50) NOT NULL,
  `tgl_mulai_tugas` varchar(100) DEFAULT NULL,
  `kontrak_ke` int(11) NOT NULL,
  `masa_kerja` varchar(40) NOT NULL,
  `tugas` int(11) NOT NULL,
  `gaji_pokok` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pttb`
--

INSERT INTO `pttb` (`id_pttb`, `id_pegawai`, `nip`, `penetap_sk`, `tgl_penetapan_sk`, `no_sk`, `tgl_mulai_tugas`, `kontrak_ke`, `masa_kerja`, `tugas`, `gaji_pokok`) VALUES
(1, 61, '2009.09.01.0017', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0620 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 13, '11 Tahun 4 Bulan', 44, 2400000),
(2, 67, '2010.01.01.0045', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0616 /300.04 / 2021', '01 Januari s/d 31 Desember 2021', 12, '11 Thn 0 Bln', 44, 2400000),
(3, 69, '2010.06.01.0078', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0618 /300.04 / 2021', '01 Januari s/d 31 Desember 2021', 12, '10 Thn 7  Bln', 44, 2400000),
(4, 70, '2010.07.01.0087', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0600 /300.04 / 2021', '01 Januari s/d 31 Desember 2021', 12, '10 Thn 6  Bln', 44, 2325000),
(5, 72, '2010.08.01.0090', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0605 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 12, '10 Thn 5  Bln', 44, 2250000),
(6, 75, '2010.11.01.0114', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0606 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 12, '10 Thn 2 Bln', 44, 2400000),
(7, 77, '2011.04.01.0131', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0591 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 9 Bln', 44, 2250000),
(8, 79, '2011.05.01.0295', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0592 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 8 Bln', 44, 2250000),
(9, 80, '2011.05.01.0296', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0588 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 8 Bln', 44, 2250000),
(10, 81, '2011.05.01.0297', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0604 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 8 Bln', 44, 2250000),
(11, 82, '2011.08.01.0440', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0599 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 5 Bln', 44, 2400000),
(12, 86, '2011.09.01.0464', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0601 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 4  Bln', 44, 2250000),
(13, 87, '2011.09.01.0491', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0619 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 4  Bln', 44, 2250000),
(14, 88, '2011.09.01.0531', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0610 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 4  Bln', 44, 2325000),
(15, 89, '2011.11.01.0598', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0589 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 11, '9 Thn 2  Bln', 44, 2400000),
(16, 90, '2012.01.01.0816', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0595 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 10, '9 Thn 0  Bln', 44, 2250000),
(17, 91, '2012.03.01.0838', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0602 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 10, '8 Thn 10  Bln', 44, 2250000),
(18, 92, '2012.05.01.0956', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0608 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 10, '8 Thn 8  Bln', 44, 2400000),
(19, 93, '2012.10.01.1085', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0607 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '8 Thn 3  Bln', 44, 2250000),
(20, 94, '2013.02.01.1096', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0603 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 9, '7 Thn 11  Bln', 40, 2250000),
(21, 95, '2013.05.01.1133', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0596 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 9, '7 Thn 8  Bln', 44, 2400000),
(22, 96, '2013.03.01.1109', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0598 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 9, '7 Thn 10  Bln', 44, 2250000),
(23, 99, '2013.08.01.1238', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0609 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 9, '7 Thn 5 Bln', 44, 2400000),
(24, 102, '2013.08.01.1237', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0614 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 9, '7 Thn 5 Bln', 44, 2400000),
(25, 104, '2013.09.01.1246', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0612 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '7 Thn 4 Bln', 44, 2400000),
(26, 106, '2013.08.01.1241', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0615 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '7 Thn 5 Bln', 44, 2400000),
(27, 108, '2014.01.01.1282', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0597 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '7 Thn 0  Bln', 44, 2250000),
(28, 111, '2014.01.01.1296', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0587 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '8 Thn 0  Bln', 44, 2400000),
(29, 113, '2014.01.01.1338', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0617 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '7 Thn 0 Bln', 44, 2250000),
(30, 116, '2014.01.01.1470', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0590 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 8, '7 Thn 0  Bln', 44, 2400000),
(31, 118, '2015.07.01.1572', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0594 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 7, '7 Thn 6 Bln', 44, 2250000),
(32, 122, '2015.07.01.1619', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0613 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 6, '5 Thn 6 Bln', 44, 2400000),
(33, 124, '2015.07.01.1633', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0593 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 5, '5 Thn 6 Bln', 44, 2400000),
(34, 125, '2012.07.01.0983', 'A.n Walikota Samarinda (Sekretaris Daerah)', '2020-12-30', '814.1 / 0611 /300.04 / 2020', '01 Januari s/d 31 Desember 2021', 7, '8 Thn 6 Bln', 44, 2400000);

-- --------------------------------------------------------

--
-- Table structure for table `ptth`
--

CREATE TABLE `ptth` (
  `id_ptth` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `nik` varchar(50) NOT NULL,
  `penetap_sk` varchar(80) NOT NULL,
  `tgl_penetapan_sk` date NOT NULL,
  `no_sk` varchar(50) NOT NULL,
  `tgl_mulai_tugas` varchar(100) DEFAULT NULL,
  `tugas` int(11) NOT NULL,
  `gaji_pokok` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ptth`
--

INSERT INTO `ptth` (`id_ptth`, `id_pegawai`, `nik`, `penetap_sk`, `tgl_penetapan_sk`, `no_sk`, `tgl_mulai_tugas`, `tugas`, `gaji_pokok`) VALUES
(1, 58, '6472051010840020', 'Kepala Dinas', '2021-01-04', '800/052/100.08', '4 JAN s/d 31 DES 2021', 31, 1750000),
(2, 62, '6472052906780003', 'Kepala Dinas', '2021-04-01', '800/053/100.08', '4 JAN s/d 31 DES 2021', 31, 1750000),
(3, 63, '6403055705960007', 'Kepala Dinas', '2021-01-04', '800/054/100.08', '4 JAN s/d 31 DES 2021', 31, 1750000),
(4, 64, '6402064309930002', 'Kepala Dinas', '2021-01-04', '800/020/100.08', '4 JAN s/d 31 DES 2021', 34, 2100000),
(5, 65, '6472034507990005', 'Kepala Dinas', '2021-01-04', '800/103/100.08', '1 MARET s/d 31 DES 2021', 32, 1500000),
(6, 66, '6472064902960003', 'Kepala Dinas', '2021-01-04', '800/108/100.08', '5 MARET s/d 31 DES 2021', 32, 1500000),
(7, 68, '6472032809880001', 'Kepala Dinas', '2021-01-04', '800/038/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(8, 71, '6472022612970007', 'Kepala Dinas', '2021-01-04', '800/039/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(9, 73, '6472040104890005', 'Kepala Dinas', '2021-01-04', '800/023/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(10, 74, '6472040412850005', 'Kepala Dinas', '2021-04-01', '800/025100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(11, 76, '6472042311890001', 'Kepala Dinas', '2021-01-04', '800/026/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(12, 78, '6472030310840004', 'Kepala Dinas', '2021-04-01', '800/027/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(16, 97, '6472043009850004', 'Kepala Dinas', '2021-01-04', '800/028/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(17, 98, '6472043006910003', 'Kepala Dinas', '2021-01-04', '800/029/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(18, 100, '6472042104840002', 'Kepala Dinas', '2021-01-04', '800/011/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(19, 101, '640208230590002', 'Kepala Dinas', '2021-01-04', '800/012/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(20, 103, '6472066307920001', 'Kepala Dinas', '2021-01-04', '800/013/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(21, 105, '6472035512920004', 'Kepala Dinas', '2021-01-04', '800/014/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(22, 107, '6472060706770006', 'Kepala Dinas', '2021-01-04', '800/015/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(23, 109, '6472034809000004', 'Kepala Dinas', '2021-01-04', '800/016/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(24, 110, '6472055302890001', 'Kepala Dinas', '2021-01-04', '800/030/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(25, 112, '6472046407940004', 'Kepala Dinas', '2021-01-04', '800/031/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(26, 114, '6472042808000004', 'Kepala Dinas', '2021-01-04', '800/032/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(27, 115, '6472032001910003', 'Kepala Dinas', '2021-01-04', '800/033/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(28, 117, '6472041908770006', 'Kepala Dinas', '2021-01-04', '800/034/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(29, 119, '6472030904000001', 'Kepala Dinas', '2021-01-04', '800/035/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(30, 120, '6472054603950006', 'Kepala Dinas', '2021-01-04', '800/037/100.08', '4 JAN s/d 31 DES 2021', 33, 1350000),
(31, 121, '6472032907830001', 'Kepala Dinas', '2021-01-04', '800/036/100.08', '4 JUNI s/d 31 DES 2021', 33, 1350000),
(32, 123, '6472066205890001', 'Kepala Dinas', '2021-06-02', '800/0121/100.08', '3 JUNI s/d 31 DES 2021', 33, 1350000),
(33, 126, '6472031711880004', 'Kepala Dinas', '2021-04-01', '800/019/100.08', '4 JAN s/d 31 DES 2021', 34, 2100000),
(34, 127, '6472044705990003', 'Kepala Dinas', '2021-04-01', '800/049/100.08', '4 JAN s/d 31 DES 2021', 35, 1500000),
(35, 128, '6403056711970001', 'Kepala Dinas', '2021-01-04', '800/048/100.08', '4 JAN s/d 31 DES 2021', 36, 1500000),
(36, 129, '6472051712770002', 'Kepala Dinas', '2021-01-04', '800/017/100.08', '4 JAN s/d 31 DES 2021', 37, 2100000),
(37, 130, '6472071507780001', 'Kepala Dinas', '2021-01-04', '800/055/100.08', '4 JAN s/d 31 DES 2021', 38, 1966300),
(38, 131, '6472031306960004', 'Kepala Dinas', '2021-01-04', '800/056/100.08', '4 JAN s/d 31 DES 2021', 38, 1966300),
(39, 132, '6472032012000001', 'Kepala Dinas', '2021-01-04', '800/057/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(40, 133, '6472050305980001', 'Kepala Dinas', '2021-01-04', '800/058/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(41, 134, '3311051810940001', 'Kepala Dinas', '2021-01-04', '800/059/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(42, 135, '6402070212950002', 'Kepala Dinas', '2021-01-04', '800/060/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(43, 136, '6472030112970006', 'Kepala Dinas', '2021-01-04', '800/061/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(44, 137, '6472031607000004', 'Kepala Dinas', '2021-01-04', '800/062/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(45, 138, '6472031904980001', 'Kepala Dinas', '2021-01-04', '800/063/100.08', '4 JAN s/d 31 DES 2021', 38, 1750000),
(46, 139, '6472091105990001', 'Kepala Dinas', '2021-01-04', '800/051/100.08', '4 JAN s/d 31 DES 2021', 39, 1300000),
(47, 140, '6472050511780005', 'Kepala Dinas', '2021-01-04', '800/024/100.08', '4 JAN s/d 31 DES 2021', 40, 1300000),
(48, 141, '6472060302910001', 'Kepala Dinas', '2021-01-04', '800/021/100.08', '4 JAN s/d 31 DES 2021', 40, 1300000),
(49, 142, '6472032503990003', 'Kepala Dinas', '2021-01-04', '800/022/100.08', '4 JAN s/d 31 DES 2021', 40, 1300000),
(50, 143, '6472050802750005', 'Kepala Dinas', '2021-01-04', '800/064/100.08', '4 JAN s/d 31 DES 2021', 41, 1300000),
(51, 144, '6308081002660001', 'Kepala Dinas', '2021-01-04', '800/065/100.08', '5 MARET s/d 31 DES 2021', 41, 1300000),
(52, 145, '6472052308800009', 'Kepala Dinas', '2021-01-04', '800/040/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(53, 146, '6472051809810002', 'Kepala Dinas', '2021-01-04', '800/041/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(54, 147, '7313020201700001', 'Kepala Dinas', '2021-01-04', '800/042/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(55, 148, '6472050609770001', 'Kepala Dinas', '2021-01-04', '800/043/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(56, 149, '6472051606860007', 'Kepala Dinas', '2021-01-04', '800/044/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(57, 150, '6472051201970004', 'Kepala Dinas', '2021-01-04', '800/046/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000),
(58, 151, '6472051804980000', 'Kepala Dinas', '2021-06-03', '800/0125/100.08', '4 JAN s/d 31 DES 2021', 43, 1500000),
(59, 152, '6472051012980003', 'Kepala Dinas', '2021-06-03', '800/0126/100.08', '4 JAN s/d 31 DES 2021', 36, 1500000),
(60, 153, '6308081907900003', 'Kepala Dinas', '2021-06-03', '800/0127/100.08', '4 JAN s/d 31 DES 2021', 42, 1240000);

-- --------------------------------------------------------

--
-- Table structure for table `rekap_absensi`
--

CREATE TABLE `rekap_absensi` (
  `id_rekap_absensi` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `izin` int(11) NOT NULL,
  `sakit` int(11) NOT NULL,
  `cuti` int(11) NOT NULL,
  `tanpa_keterangan` int(11) NOT NULL,
  `hadir` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_kerja`
--

CREATE TABLE `riwayat_kerja` (
  `id_riwayat_kerja` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `kantor` varchar(50) NOT NULL,
  `jabatan` varchar(255) NOT NULL,
  `keterangan` text NOT NULL,
  `tgl_masuk` date NOT NULL,
  `tgl_keluar` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_mk`
--

CREATE TABLE `riwayat_mk` (
  `id_riwayat_mk` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `mk_golongan` varchar(40) NOT NULL,
  `mk_jabatan` varchar(40) NOT NULL,
  `mk_sebelum_cpns` varchar(40) NOT NULL,
  `mk_seluruhnya` varchar(40) NOT NULL,
  `tanggal` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `riwayat_mk`
--

INSERT INTO `riwayat_mk` (`id_riwayat_mk`, `id_pegawai`, `mk_golongan`, `mk_jabatan`, `mk_sebelum_cpns`, `mk_seluruhnya`, `tanggal`, `created_at`, `updated_at`) VALUES
(1, 1, '21 Tahun 3 Bulan', '4 Tahun 0 Bulan', '0 Tahun 0 Bulan', '27 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(2, 2, '30 Tahun 2 Bulan', '3 Tahun 11 Bulan', '6 Tahun 7 Bulan', '35 Tahun 4 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(3, 3, '16 Tahun 4 Bulan', '1 Tahun 10 Bulan', '0 Tahun 0 Bulan', '19 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(4, 4, '17 Tahun 10 Bulan', '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '27 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(5, 5, '16 Tahun 4 Bulan', '1 Tahun 8 Bulan', '0 Tahun 0 Bulan', '19 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(6, 6, '15 Tahun 3 Bulan', '0 Tahun 0 Bulan', '3 Tahun 1 Bulan', '15 Tahun 5 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(7, 7, '13 Tahun 1 Bulan', '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '24 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(8, 8, '18 Tahun 2 Bulan', '3 Tahun 0 Bulan', '0 Tahun 0 Bulan', '32 Tahun 3 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(9, 9, '7 Tahun 7 Bulan', '1 Tahun 4 Bulan', '0 Tahun 0 Bulan', '22 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(10, 10, '12 Tahun 11 Bulan', '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '19 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(11, 11, '12 Tahun 4 Bulan', ' 3 Tahun 0 Bulan', '0 Tahun 0 Bulan', '19 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(12, 12, '21 Tahun 1 Bulan', '3 Tahun 10 Bulan', '0 Tahun 8 Bulan', '32 Tahun 3 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(13, 13, '12 Tahun 0 Bulan', '1 Tahun 1 Bulan', '0 Tahun 0 Bulan', '14 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(14, 14, '15 Tahun 5 Bulan', '3 Tahun 10 Bulan', '4 Tahun 8 Bulan', '22 Tahun 1 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(15, 15, '22 Tahun 7 Bulan', '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '24 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(16, 16, '10 Tahun 6 Bulan', '3 Tahun 10 Bulan', '0 Tahun 0 Bulan', '11 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(17, 17, '13 Tahun 3 Bulan', '0 Tahun 0 Bulan', '7 Tahun 0 Bulan', '19 Tahun  11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(18, 18, '15 Tahun 3 Bulan', '0 Tahun 0 Bulan', '5 Tahun 0 Bulan', '0 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(19, 19, '14 Tahun 8 Bulan', '0 Tahun 0 Bulan', '6 Tahun 5 Bulan', '17 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(20, 20, '4 Tahun 4 Bulan', '0 Tahun 0 Bulan', '3 Tahun 8 Bulan', '17 Tahun 6 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(21, 21, '13 Tahun 3 Bulan', '0 Tahun 0 Bulan', '5 Tahun 0 Bulan', '15 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(22, 22, '8 Tahun 8 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 10 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(23, 23, '15 Tahun 11 Bulan', '0 Tahun 0 Bulan', '8 Tahun 7 Bulan', '11 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(24, 24, '15 Tahun 6 Bulan', '0 Tahun 0 Bulan', '7 Tahun 9 Bulan', '21 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(25, 25, '16 Tahun 2 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(26, 26, '14 Tahun 8 Bulan', '0 Tahun 0 Bulan', '6 Tahun 5 Bulan', '17 Tahun 4 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(27, 27, '12 Tahun 2 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 10 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(28, 28, '16 Tahun 6 Bulan', '0 Tahun 0 Bulan', '6 Tahun 11 Bulan', '21 Tahun 2 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(29, 29, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(30, 30, '10 Tahun 5 Bulan', '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '17 Tahun 2 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(31, 31, '4 Tahun 7 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(32, 32, '7 Tahun 9 Bulan', '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '13 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(33, 33, '19 Tahun 6 Bulan', '0 Tahun 0 Bulan', '6 Tahun 9 Bulan', '20 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(34, 34, '11 Tahun 0 Bulan', '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '19 Tahun 10 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(35, 35, '9 Tahun 6 Bulan', '0 Tahun 0 Bulan', '5 Tahun 3 Bulan', '17 Tahun 2 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(36, 36, '17 Tahun 11 Bulan', '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '25 Tahun 6 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(37, 37, '14 Tahun 7 Bulan', '0 Tahun 0 Bulan', '6 Tahun 4 Bulan', '17 Tahun 3 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(38, 38, '9 Tahun 2 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(39, 39, '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(40, 40, '13 Tahun 11 Bulan', '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '20 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(41, 41, '4 Tahun 7 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(42, 42, '4 Tahun 7 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(43, 43, '7 Tahun 9 Bulan', '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '13 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(44, 44, '17 Tahun 11 Bulan', '0 Tahun 0 Bulan', '5 Tahun 7 Bulan', '18 Tahun 6 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(45, 45, '14 Tahun 9 Bulan', '0 Tahun 0 Bulan', '11 Tahun 1 Bulan', '15 Tahun 5 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(46, 46, '11 Tahun 7 Bulan', '0 Tahun 0 Bulan', '3 Tahun 0 Bulan', '14 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(47, 47, '12 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '17 Tahun 3 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(48, 48, '7 Tahun 9 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '10 Tahun 11 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(49, 49, '15 Tahun 10 Bulan', '0 Tahun 0 Bulan', '0 Tahun 9 Bulan', '36 Tahun 5 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(50, 50, '9 Tahun 6 Bulan', '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '20 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(51, 51, '14 Tahun 11 Bulan', '0 Tahun 0 Bulan', '6 Tahun 8 Bulan', '20 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(52, 52, '12 Tahun 0 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '14 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(53, 53, '14 Tahun 4 Bulan', '0 Tahun 0 Bulan', '5 Tahun 8 Bulan', '17 Tahun 6 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(54, 54, '5 Tahun 7 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 9 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(55, 55, '9 Tahun 11 Bulan', '0 Tahun 0 Bulan', '5 Tahun 9 Bulan', '17 Tahun 7Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(56, 56, '11 Tahun 6 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '14 Tahun 8 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00'),
(57, 57, '9 Tahun 11 Bulan', '0 Tahun 0 Bulan', '0 Tahun 0 Bulan', '15 Tahun 7 Bulan', '2021-07-11', '2021-07-12 04:54:32', '2021-07-11 08:29:00');

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_mk_file`
--

CREATE TABLE `riwayat_mk_file` (
  `id_riwayat_mk_file` bigint(20) UNSIGNED NOT NULL,
  `file` varchar(100) NOT NULL,
  `file_slug` varchar(100) NOT NULL,
  `keadaan` varchar(30) NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `riwayat_sk`
--

CREATE TABLE `riwayat_sk` (
  `id_riwayat_sk` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `no_sk` varchar(80) NOT NULL,
  `penetap_sk` varchar(100) NOT NULL,
  `tgl_penetapan_sk` date NOT NULL,
  `tgl_mulai_tugas` date NOT NULL,
  `kontrak_ke` int(11) DEFAULT NULL,
  `masa_kerja` varchar(30) DEFAULT NULL,
  `gaji_pokok` int(11) NOT NULL,
  `tugas` int(11) NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rw_golongan`
--

CREATE TABLE `rw_golongan` (
  `id_rw_golongan` int(11) NOT NULL,
  `id_pegawai` int(11) NOT NULL,
  `id_golongan` int(11) NOT NULL,
  `pejabat_penetap` varchar(100) NOT NULL,
  `tmt_kenaikan_pangkat` date NOT NULL,
  `tanggal` date NOT NULL,
  `masa_kerja` varchar(80) NOT NULL,
  `pangkat_terkini` int(11) NOT NULL,
  `file` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `status_pegawai`
--

CREATE TABLE `status_pegawai` (
  `id_status_pegawai` int(11) NOT NULL,
  `status_pegawai` varchar(10) NOT NULL,
  `keterangan` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_pegawai`
--

INSERT INTO `status_pegawai` (`id_status_pegawai`, `status_pegawai`, `keterangan`) VALUES
(1, 'PNS', 'Pegawai Negeri Sipil'),
(2, 'PTTH', 'Pegawai Tidak Tetap Harian'),
(3, 'PTTB', 'Pegawai Tidak Tetap Bulanan');

-- --------------------------------------------------------

--
-- Table structure for table `sub_bidang`
--

CREATE TABLE `sub_bidang` (
  `id_sub_bidang` bigint(20) UNSIGNED NOT NULL,
  `id_bidang` int(11) NOT NULL,
  `nama_sub_bidang` varchar(80) NOT NULL,
  `keterangan` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_pegawai` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `level` int(11) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `foto_profil` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `id_pegawai`, `name`, `username`, `email`, `email_verified_at`, `level`, `password`, `remember_token`, `foto_profil`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Lyntom', 'lyntom', NULL, NULL, 1, '$2y$10$nPh654Fmf.XyeRnO3sMbaeFnVzOgkFoUB1t3.JxINvPGMqG6VMIIq', NULL, 'images/foto/19971626075200-swafoto.jpg', '2021-07-05 03:54:36', NULL),
(2, NULL, 'Nova', 'nova', NULL, NULL, 1, '$2y$10$djRE3aVbHdOS2lO7Y5NpkOCRPQp07X8L5/Ze0kKVumyiKqCqlBgBe', NULL, 'images/foto/80271625715555-3x4.jpg', '2021-07-05 06:07:15', NULL),
(3, NULL, 'Fahrizal', 'fahrizal', NULL, NULL, 1, '$2y$10$djRE3aVbHdOS2lO7Y5NpkOCRPQp07X8L5/Ze0kKVumyiKqCqlBgBe', NULL, 'images/foto/85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', '2021-07-05 06:07:15', NULL),
(4, NULL, 'PKL', 'pkl', NULL, NULL, 1, '$2y$10$5zjuC3qZsV8QAisYgX8J5.VfIWC9eFcNV6QbgzBrooyA9Ga5spu9q', NULL, 'images/foto/89131625634568-136-1366211-group-of-10-guys-login-user-icon-png.png', '2021-07-06 21:09:28', NULL),
(5, 1, 'Ir. H. Dadang Airlangga Nopandani, MMT', '19651127 199301 1 001', NULL, NULL, 2, '$2y$10$HCehvtZs8gC0dpRjwAHpMuntBAK.wBD28/9FRf/S4o3Pu2R9ql1Ry', NULL, 'images/foto/97441625994178-196511271993011001.jpg', '2021-07-11 08:29:00', NULL),
(6, 2, 'H. Akhmad Husen, ST, MT', '19640315 199203 1 014', NULL, NULL, 2, '$2y$10$kT6EBRwCz.WiSm3NAaQB/eROl34qnzpBqsTr1LABXnZ0ln58/EYum', NULL, 'images/foto/78501625994178-196403151992031014.jpg', '2021-07-11 08:29:00', NULL),
(7, 3, 'H. Haimi Tauvani, ST, MM', '19721227 200112 1 004', NULL, NULL, 2, '$2y$10$kfGYDZ4.IsGghnlv5YZ4.eOIueskaDuN2.lb22QiKLFevdbETJKGa', NULL, 'images/foto/81781625994178-197212272001121004.jpg', '2021-07-11 08:29:00', NULL),
(8, 4, 'Joko Karyono, ST, MT ', '19660425 199312 1 001', NULL, NULL, 2, '$2y$10$brTXA1QYZwohB/Qum8lcWu3z0t8YMaPAC5Xb8JG3syemDoSoOipkm', NULL, 'images/foto/14391625994178-196604251993121001.jpg', '2021-07-11 08:29:00', NULL),
(9, 5, 'Neneng Chamelia Shanti, ST, MT, Msi', '19751105 200112 2 003', NULL, NULL, 2, '$2y$10$OvJKdp191VLYmT2YnRmXge9xbF/guj1KF9v9ZIo4VxNgKOfzGuHmG', NULL, 'images/foto/50651625994178-197511052001122003.jpg', '2021-07-11 08:29:00', NULL),
(10, 6, 'M. Bahtiar, ST', '19740613 200502 1 003 ', NULL, NULL, 2, '$2y$10$/.5K4t5O6YfelpCcRdSwnuEllrkV0za.gbgqBKhsCWN5agWpVQSmK', NULL, 'images/foto/57281625994178-197406132005021003.jpg', '2021-07-11 08:29:00', NULL),
(11, 7, 'Narulita Haidinawati Ibay, ST, Msi', '19700829 199604 2 001', NULL, NULL, 2, '$2y$10$FUcXSQuqfJgke9A5kN.fk.YCHTx2c2qQzcntRz8YnEHdArgI.hGca', NULL, 'images/foto/61281625994178-null.png', '2021-07-11 08:29:00', NULL),
(12, 8, 'Syaiful Anwar, ST, MM', '19710816 199402 1 003', NULL, NULL, 2, '$2y$10$.3iFCrV0Hj0mEnOk43hlOeuukYH6ope1cYouzxHHk.IcxL46ggwhC', NULL, 'images/foto/48631625994178-197108161994021003.jpg', '2021-07-11 08:29:00', NULL),
(13, 9, 'Agus Mariyanto, ST', '19680828 199803 1 008', NULL, NULL, 2, '$2y$10$kTdtazf8RvGz3AZ95lctLesURVfvWqs6X9eSuzJ/18VUWDL4C8682', NULL, 'images/foto/31731625994178-196808281998031008.jpg', '2021-07-11 08:29:00', NULL),
(14, 10, 'Dedy Efendi, SE', '19791124 200701 1 009', NULL, NULL, 2, '$2y$10$LPStLxT3knSTF5K5dkNJNe9n0c42xaMdUtESLmh8DKkfackZiCiym', NULL, 'images/foto/99971625994178-197911242007011009.jpg', '2021-07-11 08:29:00', NULL),
(15, 11, 'H. Zul Hermana, ST', '19751222 200112 1 003', NULL, NULL, 2, '$2y$10$xiHXh2WAG3.OaA7OcUuqrO2dboGckVu0khL54AcLXQLzCqul0JYTG', NULL, 'images/foto/76951625994178-197512222001121003.jpg', '2021-07-11 08:29:00', NULL),
(16, 12, 'Ir. Suryanata Dwi Putera', '19661215 198809 1 001', NULL, NULL, 2, '$2y$10$hUbbumt0SgYgQyPPw/w59uaervpflRS2DDGmjCYoaxsBKXrx.rFnG', NULL, 'images/foto/44331625994178-196612151988091001.jpg', '2021-07-11 08:29:00', NULL),
(17, 13, 'Riman, SP', '19750307 200604 1 004', NULL, NULL, 2, '$2y$10$RDNTL64xceckfIscWkOi4uUG1BjWNsK21/BpxVO2ZhgQqqpEjbiKu', NULL, 'images/foto/56651625994178-197503072006041004.jpg', '2021-07-11 08:29:00', NULL),
(18, 14, 'Noviar Azwari, ST', '19740328 200112 1 005 ', NULL, NULL, 2, '$2y$10$6e9Dm4nv50cm2EEE31WY6eIrgBvmUXxhJFY2l4k/l20v9iqNbdGie', NULL, 'images/foto/80061625994178-197403282001121005.jpg', '2021-07-11 08:29:00', NULL),
(19, 15, 'Sunar, ST , M.Si', '19650215 199103 1 012', NULL, NULL, 2, '$2y$10$jbqY7gAM/FZAYYu4iEl6zeYD2F79zj0augHIWCgQlucKtr0NzNHBm', NULL, 'images/foto/94341625994178-null.png', '2021-07-11 08:29:00', NULL),
(20, 16, 'Riski Aprilian, ST', '19830405 200904 1 005', NULL, NULL, 2, '$2y$10$PWG6ZfzZNAacUE3s93KLdeJc3psExfb9BKXsII96/aL1GB4sllX3W', NULL, 'images/foto/19421625994178-null.png', '2021-07-11 08:29:00', NULL),
(21, 17, 'Adhi Hamidan, SE', '19800914 200801 1 023', NULL, NULL, 2, '$2y$10$I6yCEBTAZtUquUwgWKJvPOvDVcOC/uFbp54wS3Pfdq7114A3fSWai', NULL, 'images/foto/65111625994178-198009142008011023.jpg', '2021-07-11 08:29:00', NULL),
(22, 18, 'Muhammad Ruspandi, S.Sos', '19860520 201001 1 004', NULL, NULL, 2, '$2y$10$ay/BqDKznmwH5WHhCKNkAub/KR8gyKtk53h8bjh6D69l1CSNtq6pm', NULL, 'images/foto/16121625994178-198605202010011004.jpg', '2021-07-11 08:29:00', NULL),
(23, 19, 'Yarhan', '19840121 201001 1 001', NULL, NULL, 2, '$2y$10$7dnpbur7TCuX8RxTsTtaiO11JgaytQjo8vIUKBFufbH14TcCKWcFu', NULL, 'images/foto/34351625994178-198401212010011001.jpg', '2021-07-11 08:29:00', NULL),
(24, 20, 'Sugeng Widodo', '19790728 200502 1 004', NULL, NULL, 2, '$2y$10$RENTyfn7uezg8l6znacr7.CUXwQg6PmZUYGoF9ffGyk7LBYqBDkda', NULL, 'images/foto/12851625994178-197907282005021004.jpg', '2021-07-11 08:29:00', NULL),
(25, 21, 'Muhamad Dody Swarga', '19851011 201001 1 005', NULL, NULL, 2, '$2y$10$a6wcB3k7wwYQgm/19lw5DOhmMOU3011lhfBpP2Ddzcf0xZVcz.gTi', NULL, 'images/foto/16171625994178-198510112010011005.jpg', '2021-07-11 08:29:00', NULL),
(26, 22, 'Nur Indra Saptoadi, SH', '19830903 200502 1 001', NULL, NULL, 2, '$2y$10$M4mFenfIx1oeKwjggh.1G.UD8.ZRt5P2R1JYovZy8e0euRm0WOll6', NULL, 'images/foto/36841625994178-198309032005021001.jpg', '2021-07-11 08:29:00', NULL),
(27, 23, 'Muhammad Aidil, SE', '19840702 201212 1 001', NULL, NULL, 2, '$2y$10$Nh3JNRvD6tb3l54c5aO5Qeq96HYvyNpFd2x8RmTyDHtfsVEFBSMim', NULL, 'images/foto/88621625994178-null.png', '2021-07-11 08:29:00', NULL),
(28, 24, 'Sri Handini, A.Md', '19790320 200701 2 013', NULL, NULL, 2, '$2y$10$pYUStQ03AVYTFkala7yKwebzy5oJoPI2AsIjWGUXO/Wsl7sALmJlK', NULL, 'images/foto/50711625994178-197903202007012013.jpg', '2021-07-11 08:29:00', NULL),
(29, 25, 'Herdia Astuti, A.Md', '19820419 200502 2 002', NULL, NULL, 2, '$2y$10$A4ZGjwrUpODvJRL5YXl7IemanyTowJmqhE.XdpwAPY/RcoGQ7QZeK', NULL, 'images/foto/45651625994178-198204192005022002.jpg', '2021-07-11 08:29:00', NULL),
(30, 26, 'Asmuransyah', '19850523 201001 1 001', NULL, NULL, 2, '$2y$10$AmzOochh5lQNH11xZLjujOkR7VOe95WzuPc64p/qoyE8yD.wDulvS', NULL, 'images/foto/93331625994178-198505232010011001.jpg', '2021-07-11 08:29:00', NULL),
(31, 27, 'Nelly Kala, ST', '19790622 200502 2 005', NULL, NULL, 2, '$2y$10$ZtxqtMWPqFsyaYt43slFH.tRy/HmdAajMC1RC39zp7W1soU2/1M7C', NULL, 'images/foto/42741625994178-null.png', '2021-07-11 08:29:00', NULL),
(32, 28, 'Urif Kurniawan, S.Hut', '19731205 200212 1 005', NULL, NULL, 2, '$2y$10$AqGygYbbTfuym5laWf86YeXi3QwW39CvTFMitk.S.ZH6H8g4v4R0y', NULL, 'images/foto/81051625994178-197312052002121005.jpg', '2021-07-11 08:29:00', NULL),
(33, 29, 'Elvin Mihael Arief, SE', '19770629 200801 1 014', NULL, NULL, 2, '$2y$10$WLnYam5Sik05La/gZTJ62OZMvd9nHZ69lzUtXe1gyGk5ZpwzgYuoq', NULL, 'images/foto/82351625994178-null.png', '2021-07-11 08:29:00', NULL),
(34, 30, 'Wahyu Anwar, ST', '19730120 200901 1 001', NULL, NULL, 2, '$2y$10$Qmg2ibv6YfE2MxyXkbwQfuejJd4HUgyNjt1H8H9GlhalbYKUVI3su', NULL, 'images/foto/43701625994178-197301202009011001.jpg', '2021-07-11 08:29:00', NULL),
(35, 31, 'Elfarina Permatasari, ST', '19830413 201503 2 002', NULL, NULL, 2, '$2y$10$5auqlO15enzL.ezXt9Kv5erMQC08Hj/tHgnQrWo6qVJdk9oDDYu/C', NULL, 'images/foto/37701625994178-null.png', '2021-07-11 08:29:00', NULL),
(36, 32, 'Mochammad Reza Irfani, A.Md', '19840926 201001 1 009', NULL, NULL, 2, '$2y$10$qNTpJtQj9riDTqNwqugqn.ZqbqFSaqnm025j6tgmoeABcw0jEKzFG', NULL, 'images/foto/75851625994178-198409262010011009.jpg', '2021-07-11 08:29:00', NULL),
(37, 33, 'Silvana ', '19791027 200701 2 005', NULL, NULL, 2, '$2y$10$QHXmENuW8fIPKHLMz7mr2OnMTNWGX3GCyRK.H9MCGISna1WRdf2e2', NULL, 'images/foto/18591625994178-197910272007012005.jpg', '2021-07-11 08:29:00', NULL),
(38, 34, 'Yulius Yonas Tappangan, ST', '19800707 200801 1 026', NULL, NULL, 2, '$2y$10$G7gNmMKapR.5fAyfGxMoFO9fwxAoKX0AoaiLUKCAMmtHkZzSNM2ni', NULL, 'images/foto/98721625994178-198007072008011026.jpg', '2021-07-11 08:29:00', NULL),
(39, 35, 'Muhammad Saleh Afif, ST', '19800305 200901 1 004', NULL, NULL, 2, '$2y$10$zMTQDL8hgDBcGjSDLEIluejVqD/EPhQu8LiXBwoCiH/3wd0.BS9Wi', NULL, 'images/foto/34131625994178-198003052009011004.jpg', '2021-07-11 08:29:00', NULL),
(40, 36, 'Anwar Napolin, ST', '19701107 199903 1 003', NULL, NULL, 2, '$2y$10$9vw2xTTd6dc/xK7.HvDaGePuj8L1RhWkY65i4eK9sUcDvo55cY4.a', NULL, 'images/foto/57841625994178-197011071999031003.jpg', '2021-07-11 08:29:00', NULL),
(41, 37, 'Aulia Marini, ST', '19780314 201001 2 001', NULL, NULL, 2, '$2y$10$u/9.CdX4r.85J1rsT35CyOxXgEkDrJMIDcIJkunfFnbl2GnPl3tOG', NULL, 'images/foto/23481625994178-197803142010012001.jpg', '2021-07-11 08:29:00', NULL),
(42, 38, 'Burhan Banhar, ST', '19811112 200502 1 003', NULL, NULL, 2, '$2y$10$JfKl6midPTw6.HCLDJqqCOQGyeVw6IvUkq97ghdLSrO3isnxtkmmK', NULL, 'images/foto/29041625994178-198111122005021003.jpg', '2021-07-11 08:29:00', NULL),
(43, 39, 'Ronal, ST', '19830817 200701 1 004', NULL, NULL, 2, '$2y$10$NKU.sGEO2XVsIMlM0tMpD.AHsXV4hNztEkUJcUVSRCDVrtm5fiXxe', NULL, 'images/foto/71401625994178-198308172007011004.jpg', '2021-07-11 08:29:00', NULL),
(44, 40, 'Zainuri, ST', '19780606 200701 1 019', NULL, NULL, 2, '$2y$10$Va5Qhe.CYcptU4Ne8x1a1uCdSXS2bSMDRT1NPUnEi9UmeoJAnAKDq', NULL, 'images/foto/97241625994178-197806062007011019.jpg', '2021-07-11 08:29:00', NULL),
(45, 41, 'Fauzan Fazairin.M, ST', '19860424 201503 1 004', NULL, NULL, 2, '$2y$10$wYRM9oJn2wVx899AVtiqfOOrNm2YbHxKHaJreDhoacUcrnRUWJ6NK', NULL, 'images/foto/11711625994178-null.png', '2021-07-11 08:29:00', NULL),
(46, 42, 'Joko Susilo, ST', '19870420 201503 1 002', NULL, NULL, 2, '$2y$10$WI8QBh03V0pR1gNPXyJmDOVDX6wkvw3ng89uTGp4cPypyy/wDG/k6', NULL, 'images/foto/26071625994178-196604251993121001.jpg', '2021-07-11 08:29:00', NULL),
(47, 43, 'Muhammad Rijal Muttaqien, A.Md', '19870909 201001 1 007', NULL, NULL, 2, '$2y$10$Rieez8HmPI5FqmRMq37GSeGWSK1/yZlDZ/TRwcOx/p6OSXKSavlqy', NULL, 'images/foto/26441625994178-198709092010011007.jpg', '2021-07-11 08:29:00', NULL),
(48, 44, 'Robert Edowin', '19760606 200801 1 013', NULL, NULL, 2, '$2y$10$PhtgA6sGBswrVpZ4WjnUIu4aqyL.CdoIojSjRatCzqgIBAkS17qjK', NULL, 'images/foto/71491625994178-197602062008011013.jpg', '2021-07-11 08:29:00', NULL),
(49, 45, 'Erwin Apriano', '19800404 201408 1 002', NULL, NULL, 2, '$2y$10$yl.75PS5Ggejbg3h.4KyeuMBzf1YuPyN2k43W1UKtNglCZhA0V8.e', NULL, 'images/foto/55821625994178-198004042014081002.jpg', '2021-07-11 08:29:00', NULL),
(50, 46, 'Asnawati, A .Md', '19810225 200903 2 010', NULL, NULL, 2, '$2y$10$BDzg0hpYoGd93aNTjmvaduSJdQXEUzdFFu4CdsyYttwccqE8xTWxO', NULL, 'images/foto/64901625994178-198102252009032010.jpg', '2021-07-11 08:29:00', NULL),
(51, 47, 'Muhammad Heru Firmanto, ST', '19830529 200904 1 005', NULL, NULL, 2, '$2y$10$tZtkFnG/adlaa/6msxY79umwlg0ALTsxFioh0nWiiFWAWbWiFfqkm', NULL, 'images/foto/53411625994178-198305292009041005.jpg', '2021-07-11 08:29:00', NULL),
(52, 48, 'Hilyati Rivai Bungsu, ST, MT', '19790703 201001 2 023', NULL, NULL, 2, '$2y$10$xegJFJCUtFcb/OvJjtWkw.zKsMN4H9ljdJeiQiKyTULoiDp.kDANK', NULL, 'images/foto/76531625994178-null.png', '2021-07-11 08:29:00', NULL),
(53, 49, 'Muhammad Zulkiflie', '19641204 198503 1 005', NULL, NULL, 2, '$2y$10$7Qxi0deGNWZ2tWqcq9ghE.nSMRB9w45VjYsDq3VxpmDvC1hSDlsyC', NULL, 'images/foto/69301625994178-196412041985031005.jpg', '2021-07-11 08:29:00', NULL),
(54, 50, 'Nurul Huda, ST', '19851019 200801 1 004', NULL, NULL, 2, '$2y$10$xeBElCoPDBMdZhZIZOBpCuS.Av/a7Kj2nOdq9C2wZEJwMoecRd3tS', NULL, 'images/foto/34211625994178-198510192008011004.jpg', '2021-07-11 08:29:00', NULL),
(55, 51, 'Wahyudi Rizal, SE', '19760905 200701 1 015', NULL, NULL, 2, '$2y$10$D4Bq1bLOtQzR8i6YECiH5.bfVDf7eKsH4gUdVgpJsPy6GMvol8ObS', NULL, 'images/foto/28141625994178-197609052007011015.jpg', '2021-07-11 08:29:00', NULL),
(56, 52, 'Muhammad Khairul Fajri. S', '19870920 200604 1 003', NULL, NULL, 2, '$2y$10$TSJOMsCADWRxkiJj85bBl.yOvXZUJA17oDfJQwM7tppqR1AD4Hgaa', NULL, 'images/foto/59521625994178-198709202006041003.jpg', '2021-07-11 08:29:00', NULL),
(57, 53, 'Dovan Rarenra', '19800821 200902 1 005', NULL, NULL, 2, '$2y$10$epij7LHULNJJoAHEhKs6J.TB4A0KThdbGsf0lwkQhmjAvQ2.cx4b2', NULL, 'images/foto/21831625994178-198008212009021005.jpg', '2021-07-11 08:29:00', NULL),
(58, 54, 'Sayid Ryan  Andriannur', '19810517 200003 1 002', NULL, NULL, 2, '$2y$10$7cNh4kKIuuO46NIkwCN/ReyhXQAwevYq3UGPLhArV56LiMJFnzWbu', NULL, 'images/foto/88721625994178-198105172000031002.jpg', '2021-07-11 08:29:00', NULL),
(59, 55, 'Hasihholan Wilson, ST', '19770905 200901 1 002', NULL, NULL, 2, '$2y$10$pdqcazSfT/9zSvkBmUpDPuVgLNQSHh/t/68L6xruK/ZiRhjZnYswi', NULL, 'images/foto/30161625994178-197709052009011002.jpg', '2021-07-11 08:29:00', NULL),
(60, 56, 'Ahmad Helmi ', '19780506 200604 1 018', NULL, NULL, 2, '$2y$10$qSrjUtSOC.7co9hKtsTPnONwosq.VhLrBaM5qFeRLEOtzwnvgMMyq', NULL, 'images/foto/79861625994178-197805062006041018.jpg', '2021-07-11 08:29:00', NULL),
(61, 57, 'Aspul Anwar, SE', '19760814 200801 1 014', NULL, NULL, 2, '$2y$10$GZ9My0BTeSv53wE9sxVyIOJDoUcwyhQ0hQ3PeVoxU.YVAJK9dHO5.', NULL, 'images/foto/57611625994178-197608142008011014.jpg', '2021-07-11 08:29:00', NULL),
(62, 58, 'AHASY WEROS HEBER, SE', '6472051010840020', NULL, NULL, 2, '$2y$10$TgHeLK.k5Kr6Y4wuwRpnUuyl/gb0RaY2BDr8fgtC1eozyvArzdxm6', NULL, '', NULL, NULL),
(63, 61, 'Deddy Bonivasius Sihotang, S.Sos', '2009.09.01.0017', NULL, NULL, 2, '$2y$10$oOSra5icg.DQa8l42j5SCeNT.H8z7ZluWcrEKCysyFT1n9d2Cxxdu', NULL, '', NULL, NULL),
(64, 67, 'Hendra Kusuma Persada, ST', '2010.01.01.0045', NULL, NULL, 2, '$2y$10$9wWolhVJ7afUrGdDQMp3uOvOV/.Exz33raSYxOorhIQBUdkEPnmBa', NULL, 'images/foto/16521626233786-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(65, 69, 'Widyawati Zusana, SE', '2010.06.01.0078', NULL, NULL, 2, '$2y$10$yKx9B0ynVcg0GWAUKnpQUe.fTPABsaC48srXD5UgngaVqd29qqd9u', NULL, 'images/foto/59101626234201-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(66, 70, 'Junadi, A.Md', '2010.07.01.0087', NULL, NULL, 2, '$2y$10$nXB9SbI7PsHAmpFe4GxJ9.LDFySPAYprABLCapNtfx11DvHruitLG', NULL, 'images/foto/12781626234582-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(67, 72, 'Indah Budiyana', '2010.08.01.0090', NULL, NULL, 2, '$2y$10$AdNUIfWElkriyYKnDOJ29ObNA0rFXpEmWJgYdz7KVvNMgeMTL.AWO', NULL, 'images/foto/11251626234808-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(68, 75, 'Danny Ganda Saputra, ST', '2010.11.01.0114', NULL, NULL, 2, '$2y$10$BhU2L6Sa5M.Qf4oXdOST0OV1fvMIvz3Ul6I76SKfVRwpgeCD4VjA2', NULL, 'images/foto/55111626240760-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(69, 77, 'Fitriani', '2011.04.01.0131', NULL, NULL, 2, '$2y$10$7TVccb/dfrdxlE6FQnfSW.KYk636b9tZEUJYUhfahb3xzIe53vTh.', NULL, 'images/foto/35311626240995-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(70, 79, 'Agus Rakhmansyah', '2011.05.01.0295', NULL, NULL, 2, '$2y$10$DG4.fB.jUQXkrNp023tCdeO71L7qIzfvzYbLxMio62VUpkg4CLDiK', NULL, 'images/foto/37311626241197-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(71, 80, 'Fadli', '2011.05.01.0296', NULL, NULL, 2, '$2y$10$mW0.ekZYVC55hdZjlENYrOjRDIGwtKTp2oqQWENuUxU0Nt/87h7c.', NULL, 'images/foto/70771626241427-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(72, 81, 'Mislan', '2011.05.01.0297', NULL, NULL, 2, '$2y$10$mQePxQXUjRNDnqoUm3SlKeDgy8CU1DdDydi2kINF8TynTad1qcdyi', NULL, 'images/foto/2141626241630-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(73, 82, 'Eka Heriyani, SE, M.Si', '2011.08.01.0440', NULL, NULL, 2, '$2y$10$pQOIByUHnTg53YX0LRz3YOKNGai06FuJn9Yn6bQZLr4A487a46X7i', NULL, 'images/foto/93811626241856-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(74, 87, 'Tezar Sukma Hanggara', '2011.09.01.0491', NULL, NULL, 2, '$2y$10$KFD8hRP1IjVykBQBinsiQeLxTTwEVc7Up0whw2KIposacZ8Oqxyye', NULL, 'images/foto/70131626244320-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(75, 88, 'Wahyuni Ramli, A.Md', '2011.09.01.0531', NULL, NULL, 2, '$2y$10$KLJUxa9zcZnAIMbs664uv.8nuTPTCGngH9DnnVuGx.3OcMUqNvt7y', NULL, 'images/foto/94521626244592-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(76, 89, 'Hari Purwoto, S. Hut', '2011.11.01.0598', NULL, NULL, 2, '$2y$10$dya66mbjvmxvYq8oa7o.Ce1jyYQ9w9ykDlsabIMQNeIpfLkjndJq.', NULL, 'images/foto/87291626244897-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(77, 90, 'Akhmad Miqdad', '2012.01.01.0816', NULL, NULL, 2, '$2y$10$OxW34Y.ywRWV/DQir8sz0.CVkH4xSLcDA0E010aUzyVkzVHxmAIuK', NULL, 'images/foto/87271626245114-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(78, 91, 'Januar Kusuma Zatmika', '2012.03.01.0838', NULL, NULL, 2, '$2y$10$fxKTwA1GEeX0P8uVa6RKReTdnuQY654m9Rkf6/n/ARVEhO2DCb4SO', NULL, 'images/foto/8921626245424-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(79, 92, 'Imam Shaimuddin, ST', '2012.05.01.0956', NULL, NULL, 2, '$2y$10$WuhQfwWTNBcqPL9F55uO1e3RPLBDtUgUrNiWQzBb9opIzfxUAH.q2', NULL, 'images/foto/17421626246036-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(80, 93, 'Risma Ramawinata', '2012.10.01.1085', NULL, NULL, 2, '$2y$10$D1XaKDnUBeYbbTHo27Eawe0LqIm5HOTcMCf5ctBt6LME2FSsuhppy', NULL, 'images/foto/2651626246445-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(81, 94, 'Edi Heriadi. HR', '2013.02.01.1096', NULL, NULL, 2, '$2y$10$6Kq4WDB04wi3wnUjtk/jSeNMqIaZOcXKCnnf.GFLJ6G37czNZ6UdG', NULL, 'images/foto/21771626246732-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(82, 95, 'Siti Nur Fatimah, S.Sos', '2013.05.01.1133', NULL, NULL, 2, '$2y$10$MxrScppVir8UTBa1.rZ.x.Uyb5.RJRxUwZ0leanoBQyJiBXOnX18K', NULL, 'images/foto/32731626246935-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(83, 96, 'Fitriansyah Akbar', '2013.03.01.1109', NULL, NULL, 2, '$2y$10$uDeGgi/IZQ...qzlVjAj6eYmrNJ1vxHVNsgDdzLg4/Ajvs3NYg2gC', NULL, 'images/foto/28381626247189-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(84, 97, 'EKO PRASTIYO', '6472043009850004', NULL, NULL, 2, '$2y$10$C9Gw0.nTQ8o2YM/idkH5eOx/D8DGJh5BurTjv6X5aP.dhgwmN6nmC', NULL, 'images/foto/26821626311391-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(85, 98, 'SAIDMAN', '6472043006910003', NULL, NULL, 2, '$2y$10$vydyvRTZC7vRW9VSdvakCuE7pkMRs5esjtJ3pl0i8e01RcBkBvJEW', NULL, 'images/foto/79921626311609-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(86, 99, 'Achmad Yani, ST', '2013.08.01.1238', NULL, NULL, 2, '$2y$10$i1tfQGz7DWrqreqZapeQg.s/Dr42p.o0FqAqACY7ohcJ.a7aOq/Ti', NULL, 'images/foto/7381626311678-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(87, 100, 'MARIYANTO', '6472042104840002', NULL, NULL, 2, '$2y$10$RplosIKiHn9q83FfeMdwWOCQFd.ZY3Cqvzp4SjnTLoBhrCk77Vzx.', NULL, 'images/foto/75231626311799-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(88, 101, 'ARIFIN ZAMIAN, S.Sos', '640208230590002', NULL, NULL, 2, '$2y$10$35cKBz.XpprOX.8Rihr2BuXqXiul5dn0z/FSVWxBDaQx0sJuN3VYm', NULL, 'images/foto/51071626311952-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(89, 102, 'Dini Novita, S.Ak', '2013.08.01.1237', NULL, NULL, 2, '$2y$10$iFJ5Z/BG/94PFbJ03Uwv6./vIADd0VcMaTKluT2fK0KJvgQsGHWcO', NULL, 'images/foto/52621626311969-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(90, 103, 'MARLINA RUSNAYANTI, SE', '6472066307920001', NULL, NULL, 2, '$2y$10$5hH9.8/tZCnclGwrw6kTCOqkQVa4M7.rDEH/sPeMa9Ika3U/5NMM6', NULL, 'images/foto/67271626312139-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(91, 104, 'Winda Novitasari, SE', '2013.09.01.1246', NULL, NULL, 2, '$2y$10$RE2NRYBc9rOdSUlfuEGnc.cqn5/v9tgsI3tuMpKaEXjdB.NzjW4te', NULL, 'images/foto/91881626312206-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(92, 105, 'AULIA RIZKINAWATIE AGUS, S.Ak', '6472035512920004', NULL, NULL, 2, '$2y$10$ZQdbXdenU8Aqak2cDGFLQuWNBnaZjGCNsTLztnDF.uWmbXthzJkYu', NULL, 'images/foto/26091626312332-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(93, 106, 'Novy Haryani, ST', '2013.08.01.1241', NULL, NULL, 2, '$2y$10$HnRmogjqzq04XGvOxtxu8eXy4Lmy5VmwyMkw9mBbgCrCSCTfIOJ1e', NULL, 'images/foto/18951626312400-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(94, 107, 'ASPIANSYAH', '6472060706770006', NULL, NULL, 2, '$2y$10$ZLkLFxH9K1YZaFiMdKrAFesDpl24k6koxrxxMJJ6OlMLHlCA2PjyG', NULL, 'images/foto/60231626312473-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(95, 108, 'Mas Eka Putra', '2014.01.01.1282', NULL, NULL, 2, '$2y$10$5Q9W.MH9lZjPauVZJohna.SP4t2u06ggzGLlpuIlM3k3jXiLbc29m', NULL, 'images/foto/92001626312625-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(96, 109, 'ALYSA AMALIA', '6472034809000004', NULL, NULL, 2, '$2y$10$.8tAip3l3setbdpdm3fSYOsLTcuPEGEfOcRgISww7g0Rrc6iKVVLW', NULL, 'images/foto/45231626312641-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(97, 110, 'HUTAMI PUJI LESTARI, SE', '6472055302890001', NULL, NULL, 2, '$2y$10$1BVME6PFEH6ExTdXKz9Xg.YU8mWrMD2gKa7HyIIdxxpBjvpy9fGCC', NULL, 'images/foto/14851626312790-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(98, 111, 'Rizki Ulandary, SE', '2014.01.01.1296', NULL, NULL, 2, '$2y$10$XHD7QTmIEBHDmJ3fDKryZOuO0jM4cTJXHF/8cFEJtQSjd..bTB09u', NULL, 'images/foto/16281626312841-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(99, 112, 'OSI PUTRI FATMAWATI, SE', '6472046407940004', NULL, NULL, 2, '$2y$10$0uE/g5GI2WbOUmKKRtD9C.XAFMEjb4uTfxYNcAl/yr5VMoAnyZpwy', NULL, 'images/foto/62891626312933-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(100, 113, 'Lelly Listiarindi', '2014.01.01.1338', NULL, NULL, 2, '$2y$10$bnvon5ecK5c09ulIkUmQu.LjWAedZ/Q5RmJ8aBhhWSJNcFlHpuEOa', NULL, 'images/foto/53041626313093-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(101, 114, 'AHMAD MAULANA', '6472042808000004', NULL, NULL, 2, '$2y$10$7mqeQxzkXRdfKV.M183x6uamP79tRegOFCU6Yh3BpZAEypt5eSKmq', NULL, 'images/foto/59881626313112-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(102, 115, 'GEDE PUTRA SEBRANG', '6472032001910003', NULL, NULL, 2, '$2y$10$daV5wL/QwAYM7FeE7t5yn.A6YQ6K1Owto6fLUjfYgsbL.xmdct/52', NULL, 'images/foto/79241626313231-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(103, 116, 'Shinta Wanda Dwian Dani, SE', '2014.01.01.1470', NULL, NULL, 2, '$2y$10$Wytjck9hBL4otfSI65JbpurRP7y.74U4R6bY9W56taZVvH4pAi3qS', NULL, 'images/foto/94361626313264-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(104, 117, 'AHMAD SYARIFUDDIN NOOR', '6472041908770006', NULL, NULL, 2, '$2y$10$KNTc1wGtVzt/02k454eFWOvc/MVElpbkwAbbvOuivVLuEPrDoUip2', NULL, 'images/foto/1851626313385-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(105, 118, 'Rona Firdaus', '2015.07.01.1572', NULL, NULL, 2, '$2y$10$GCnz2CiaQkYQCdZFueicJug5uPGnMX/PFLkvMK/0nfxRDIRFah/vq', NULL, 'images/foto/14431626313463-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(106, 119, 'MUHAMMAD RIZKY ANANDA', '6472030904000001', NULL, NULL, 2, '$2y$10$g23uxJsPGvvt8XddGSoNJuXMwkR8VqyBHroLEvkkERfRC8C0tmuNu', NULL, 'images/foto/33661626313596-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(107, 120, 'EKA PURNAMASARI, S.Sos', '6472054603950006', NULL, NULL, 2, '$2y$10$mXM4uDQ1j/oEwBmOrjhsRuAgYQBDyjTkFZjQ8ycQtbmVlh8hzItSG', NULL, 'images/foto/26441626313747-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(108, 121, 'EDI PRASETYO', '6472032907830001', NULL, NULL, 2, '$2y$10$MN2IAhrPQ8PgZze9e6Z5S.aKLYZ9u2uXbprJP/bbek.VpfjujpYQ6', NULL, 'images/foto/29811626313906-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(109, 122, 'Muhammad Nanda Ednadi, ST', '2015.07.01.1619', NULL, NULL, 2, '$2y$10$PQMlIZ6fP7wiiD2y8B/zjeT5m0jSXwowqjG4Il4s05su8YGS28FHm', NULL, 'images/foto/47981626314032-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(110, 123, 'RENNA MEILINA, SE', '6472066205890001', NULL, NULL, 2, '$2y$10$9FUb9lIgjfxBBpVyvNJKGOtzNf95oTYQQlhT9OLY3avHxtUs3UCeG', NULL, 'images/foto/69001626314041-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(111, 124, 'Muhammad Rendy Rusdian, ST', '2015.07.01.1633', NULL, NULL, 2, '$2y$10$M4EBUgPLuf3tC6svF6Pun.r.0gisDkrh/qSbvxR2iSc/cbBGVs8uq', NULL, 'images/foto/62961626314215-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(112, 125, 'Reny Afriani, S.Sos', '2012.07.01.0983', NULL, NULL, 2, '$2y$10$Z0TM5bpH3Q8l4kfBC4moRe5nKjWxPLYEDpZdUS4116X8/J2T.f5qO', NULL, 'images/foto/98681626314433-whatsapp-image-2021-07-13-at-165848.jpeg', NULL, NULL),
(113, 126, 'BAYU PRATAMA PUTRA, SE', '6472031711880004', NULL, NULL, 2, '$2y$10$Nu5LSe3fe8TEslLhUwoiwuOVHAu8naemlG.hVnhw/ZHRn/rBWF3oi', NULL, 'images/foto/78621626314829-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(114, 127, 'MEYLIZA ANISA PUTRI', '6472044705990003', NULL, NULL, 2, '$2y$10$eTpkFVIITsyrnn.X5cLb8ercC60Cr2WTRYyU8oE0yHCnkBp2ehMBO', NULL, 'images/foto/77161626315111-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(115, 128, 'NOVA DWI SAPTA NAIN SEVEN, S.TR.KOM', '6403056711970001', NULL, NULL, 2, '$2y$10$/2tvxSW/z/v9IOJCKtDMlOgp.NusIVMT28scVQx7L/AXKudi2dCja', NULL, 'images/foto/64291626315402-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(116, 129, 'ANDRY KRISTYANTO A N, ST', '6472051712770002', NULL, NULL, 2, '$2y$10$7EbjcP/1yiR6gc5La5IBPu1DTQq8YLIscjnZeg6296kgWfDTi32/e', NULL, 'images/foto/9941626315772-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(117, 130, 'AMIR RACHMAN, A.Md', '6472071507780001', NULL, NULL, 2, '$2y$10$PNSJQFy.HHYJrz/nc7h.Heih/MXjBBr7eA3DjFLl/zqUag94Gtoxm', NULL, 'images/foto/97711626316522-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(118, 131, 'SUWARDI', '6472031306960004', NULL, NULL, 2, '$2y$10$GcH244ZScOeRzMKvQAKaGOgc9w.iKXzRAhbAQrjuOOOima3mGRicS', NULL, 'images/foto/44681626316756-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(119, 132, 'ASKARITO', '6472032012000001', NULL, NULL, 2, '$2y$10$SD49iaJRkwxuztd9fWGso.V3qS45KWPLhyx5F39op822qKezIgVaS', NULL, 'images/foto/60741626316970-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(120, 133, 'AHMAD AULIYADIN, A.Md.T', '6472050305980001', NULL, NULL, 2, '$2y$10$Y9Q04Croa01dQtdpzwDz0uMDZKrguGoHbheIH/YVgKe1cOtXO.U4e', NULL, 'images/foto/32201626317395-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(121, 134, 'AZIZ KHOIRUDIN', '3311051810940001', NULL, NULL, 2, '$2y$10$PIeHlTLRR2xQdrQyWr/TmOX5SndLg7TE6ECHTVvEWOOKV4PUaA9W2', NULL, 'images/foto/78191626317700-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(122, 135, 'ZAINAL ABIDIN, A.Md.T', '6402070212950002', NULL, NULL, 2, '$2y$10$Gm94HVQD/26PKdZS/g6l2e18OZ1WgemL3blDfS0rQXi5A7gav/74C', NULL, 'images/foto/6751626317941-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(123, 136, 'ARMAWAN, A.Md.T.', '6472030112970006', NULL, NULL, 2, '$2y$10$DtEptt54Ll6B0VHIlBd9sOPrajLQAOgyKlfelCGCctsC.Kd/D74Ba', NULL, 'images/foto/83841626318302-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(124, 137, 'ISWAHYUDI ESA DHARMAWAN', '6472031607000004', NULL, NULL, 2, '$2y$10$53zIIqS7civIOvxXSVhKoObZE6KyOWE7rWN717ohRWQ1qnCGr7ukK', NULL, 'images/foto/72251626318489-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(125, 138, 'ADYTIYA IRWANDA ROHIMIN', '6472031904980001', NULL, NULL, 2, '$2y$10$Mk3moFubi9q4pOR7ccDaCuGUoT8Gr1Gi9dt9xqe0jiqQmVrVXHdTm', NULL, 'images/foto/55111626318768-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(126, 139, 'M. RYU ANDHIKA RAHMAN', '6472091105990001', NULL, NULL, 2, '$2y$10$Znl4O2.n.2Lpwu2kh3CBoOu1SFg13JyEkHUokId5yS2Jg/QXil3e.', NULL, 'images/foto/9201626319082-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(127, 140, 'SAMPURNO', '6472050511780005', NULL, NULL, 2, '$2y$10$KR8pur0yqZgsOfyfFGeTX.3AvZqUnA618SrzG4h9s/B8k5AI8rK/y', NULL, 'images/foto/55271626319782-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(128, 141, 'BAKTI SADAM', '6472060302910001', NULL, NULL, 2, '$2y$10$dw9aCU0I2U6oD64Uiy.tr.smntPKD3SF7UQsC4WRjcePZiu3.JPM6', NULL, 'images/foto/12301626320240-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(129, 142, 'MUHAMMAD FIRNANDA', '6472032503990003', NULL, NULL, 2, '$2y$10$J8Pf42G2iUdZOm6L9ZPyZeHawJ9rfRB6Fg9Kw2Thetx/QjrIB.mM2', NULL, 'images/foto/70991626320457-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(130, 143, 'WARYO', '6472050802750005', NULL, NULL, 2, '$2y$10$43sAifCKKD/cUInrho/aU.2Ncmc9DwueDU7UE2tJvBtqC14S4bC6q', NULL, 'images/foto/14981626320837-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(131, 144, 'H. MUHAMMAD', '6308081002660001', NULL, NULL, 2, '$2y$10$SxElsIRQDnzLt024sJakx.j/i6QCuBIAK0X0oPgHlzRaECh90cHW.', NULL, 'images/foto/91131626321020-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(132, 145, 'SUPRIANTO', '6472052308800009', NULL, NULL, 2, '$2y$10$vqtuJPdzPG7LOCMxpSD3Z.OzHr67P3vw1wUIfEV3VuU4oDX2YTcJW', NULL, '', NULL, NULL),
(133, 146, 'WARSITO', '6472051809810002', NULL, NULL, 2, '$2y$10$Uv6Z7GsdnSNwPoKTpQPBf.JZPqNUl4gedhobXZPKfLXK8XWWfwSFS', NULL, 'images/foto/15371626321629-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(134, 147, 'MUSMULIADI', '7313020201700001', NULL, NULL, 2, '$2y$10$aG3X3jFN9zv7v2GB5DEjy.IkqUyxbwr.ZBrW8YD1H.FIPwB.3Evz2', NULL, 'images/foto/31751626321851-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(135, 148, 'TRIYONO', '6472050609770001', NULL, NULL, 2, '$2y$10$J7y9MrmMsot05DGlCD513u4RrHKgANSNIypwbRJ8aBhyJsWiQldra', NULL, 'images/foto/83761626321977-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(136, 149, 'NUR HUDA', '6472051606860007', NULL, NULL, 2, '$2y$10$SZey95ONH/2GjPjFIK/fQe3gMHP0gfzgZ/Ch8IcjS7ABpSEi85s3a', NULL, 'images/foto/37541626322139-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(137, 150, 'DIKI ARIYANTO', '6472051201970004', NULL, NULL, 2, '$2y$10$oOJaGd0nK5xSjcPq3PlNcOXK77KJPwC3PYxNP1UlSYuRd0XgQ8MKK', NULL, 'images/foto/841626322287-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(138, 151, 'MUHAMMAD FAHRIZAL IRFANDI, S.Kom.', '6472051804980000', NULL, NULL, 2, '$2y$10$VGX20pwIdLlZiRLMktKMxuKxJ8z.MZ1EPtmApzuQ/sHelgKub1WpG', NULL, 'images/foto/82761626322566-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(139, 152, 'LYNTOM IRFAN DARMAWAN, S.Tr.Kom.', '6472051012980003', NULL, NULL, 2, '$2y$10$P7f7.aoQdzO1Nt16wPhq7uVLwnxPtVOA3VHgX0Apj2yCamcc3.1tu', NULL, 'images/foto/7941626322886-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL),
(140, 153, 'HAJI SABILARRUSDI', '6308081907900003', NULL, NULL, 2, '$2y$10$TKhdoXQ3PiWRyM30RGzKr.rVVCQT/s3KcPGm46JkfRSYXqHP6ULaG', NULL, 'images/foto/38941626323043-85541625634940-136-1366211-group-of-10-guys-login-user-icon-png.png', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absensi`
--
ALTER TABLE `absensi`
  ADD PRIMARY KEY (`id_absensi`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `agama`
--
ALTER TABLE `agama`
  ADD PRIMARY KEY (`id_agama`);

--
-- Indexes for table `berkas_pegawai`
--
ALTER TABLE `berkas_pegawai`
  ADD PRIMARY KEY (`id_berkas`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `bidang`
--
ALTER TABLE `bidang`
  ADD PRIMARY KEY (`id_bidang`);

--
-- Indexes for table `cuti`
--
ALTER TABLE `cuti`
  ADD PRIMARY KEY (`id_cuti`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `diklat`
--
ALTER TABLE `diklat`
  ADD PRIMARY KEY (`id_diklat`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `duk_pegawai`
--
ALTER TABLE `duk_pegawai`
  ADD PRIMARY KEY (`id_duk`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id_jabatan`);

--
-- Indexes for table `jenjang_pendidikan`
--
ALTER TABLE `jenjang_pendidikan`
  ADD PRIMARY KEY (`id_jenjang`);

--
-- Indexes for table `keluarga`
--
ALTER TABLE `keluarga`
  ADD PRIMARY KEY (`id_keluarga`),
  ADD KEY `id_pegawai` (`id_pegawai`),
  ADD KEY `id_agama` (`id_agama`);

--
-- Indexes for table `kenaikan_pangkat`
--
ALTER TABLE `kenaikan_pangkat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `kgb`
--
ALTER TABLE `kgb`
  ADD PRIMARY KEY (`id_kgb`),
  ADD KEY `id_pegawai` (`id_pegawai`),
  ADD KEY `id_golongan` (`id_golongan`);

--
-- Indexes for table `masa_kerja_pegawai`
--
ALTER TABLE `masa_kerja_pegawai`
  ADD PRIMARY KEY (`id_masa_kerja`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `mutasi`
--
ALTER TABLE `mutasi`
  ADD PRIMARY KEY (`id_mutasi`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `pangkat_eselon`
--
ALTER TABLE `pangkat_eselon`
  ADD PRIMARY KEY (`id_pangkat_eselon`);

--
-- Indexes for table `pangkat_golongan`
--
ALTER TABLE `pangkat_golongan`
  ADD PRIMARY KEY (`id_pangkat_golongan`);

--
-- Indexes for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD PRIMARY KEY (`id_pegawai`),
  ADD KEY `id_bidang` (`id_bidang`),
  ADD KEY `id_status_pegawai` (`id_status_pegawai`),
  ADD KEY `id_jabatan` (`id_jabatan`),
  ADD KEY `id_golongan` (`id_golongan`),
  ADD KEY `id_eselon` (`id_eselon`),
  ADD KEY `id_agama` (`id_agama`);

--
-- Indexes for table `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD PRIMARY KEY (`id_pendidikan`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `penghargaan`
--
ALTER TABLE `penghargaan`
  ADD PRIMARY KEY (`id_penghargaan`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `pensiun`
--
ALTER TABLE `pensiun`
  ADD PRIMARY KEY (`id_pensiun`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pttb`
--
ALTER TABLE `pttb`
  ADD PRIMARY KEY (`id_pttb`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `ptth`
--
ALTER TABLE `ptth`
  ADD PRIMARY KEY (`id_ptth`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `rekap_absensi`
--
ALTER TABLE `rekap_absensi`
  ADD PRIMARY KEY (`id_rekap_absensi`);

--
-- Indexes for table `riwayat_kerja`
--
ALTER TABLE `riwayat_kerja`
  ADD PRIMARY KEY (`id_riwayat_kerja`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `riwayat_mk`
--
ALTER TABLE `riwayat_mk`
  ADD PRIMARY KEY (`id_riwayat_mk`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `riwayat_mk_file`
--
ALTER TABLE `riwayat_mk_file`
  ADD PRIMARY KEY (`id_riwayat_mk_file`);

--
-- Indexes for table `riwayat_sk`
--
ALTER TABLE `riwayat_sk`
  ADD PRIMARY KEY (`id_riwayat_sk`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- Indexes for table `rw_golongan`
--
ALTER TABLE `rw_golongan`
  ADD PRIMARY KEY (`id_rw_golongan`),
  ADD KEY `id_pegawai` (`id_pegawai`),
  ADD KEY `id_golongan` (`id_golongan`);

--
-- Indexes for table `status_pegawai`
--
ALTER TABLE `status_pegawai`
  ADD PRIMARY KEY (`id_status_pegawai`);

--
-- Indexes for table `sub_bidang`
--
ALTER TABLE `sub_bidang`
  ADD PRIMARY KEY (`id_sub_bidang`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pegawai` (`id_pegawai`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absensi`
--
ALTER TABLE `absensi`
  MODIFY `id_absensi` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `agama`
--
ALTER TABLE `agama`
  MODIFY `id_agama` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `berkas_pegawai`
--
ALTER TABLE `berkas_pegawai`
  MODIFY `id_berkas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bidang`
--
ALTER TABLE `bidang`
  MODIFY `id_bidang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cuti`
--
ALTER TABLE `cuti`
  MODIFY `id_cuti` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diklat`
--
ALTER TABLE `diklat`
  MODIFY `id_diklat` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `duk_pegawai`
--
ALTER TABLE `duk_pegawai`
  MODIFY `id_duk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `id_jabatan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `jenjang_pendidikan`
--
ALTER TABLE `jenjang_pendidikan`
  MODIFY `id_jenjang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `keluarga`
--
ALTER TABLE `keluarga`
  MODIFY `id_keluarga` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `kenaikan_pangkat`
--
ALTER TABLE `kenaikan_pangkat`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `kgb`
--
ALTER TABLE `kgb`
  MODIFY `id_kgb` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `masa_kerja_pegawai`
--
ALTER TABLE `masa_kerja_pegawai`
  MODIFY `id_masa_kerja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `mutasi`
--
ALTER TABLE `mutasi`
  MODIFY `id_mutasi` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pangkat_eselon`
--
ALTER TABLE `pangkat_eselon`
  MODIFY `id_pangkat_eselon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pangkat_golongan`
--
ALTER TABLE `pangkat_golongan`
  MODIFY `id_pangkat_golongan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `pegawai`
--
ALTER TABLE `pegawai`
  MODIFY `id_pegawai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT for table `pendidikan`
--
ALTER TABLE `pendidikan`
  MODIFY `id_pendidikan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=220;

--
-- AUTO_INCREMENT for table `penghargaan`
--
ALTER TABLE `penghargaan`
  MODIFY `id_penghargaan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pensiun`
--
ALTER TABLE `pensiun`
  MODIFY `id_pensiun` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `pttb`
--
ALTER TABLE `pttb`
  MODIFY `id_pttb` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `ptth`
--
ALTER TABLE `ptth`
  MODIFY `id_ptth` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `rekap_absensi`
--
ALTER TABLE `rekap_absensi`
  MODIFY `id_rekap_absensi` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `riwayat_kerja`
--
ALTER TABLE `riwayat_kerja`
  MODIFY `id_riwayat_kerja` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `riwayat_mk`
--
ALTER TABLE `riwayat_mk`
  MODIFY `id_riwayat_mk` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `riwayat_mk_file`
--
ALTER TABLE `riwayat_mk_file`
  MODIFY `id_riwayat_mk_file` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `riwayat_sk`
--
ALTER TABLE `riwayat_sk`
  MODIFY `id_riwayat_sk` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rw_golongan`
--
ALTER TABLE `rw_golongan`
  MODIFY `id_rw_golongan` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `status_pegawai`
--
ALTER TABLE `status_pegawai`
  MODIFY `id_status_pegawai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_bidang`
--
ALTER TABLE `sub_bidang`
  MODIFY `id_sub_bidang` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cuti`
--
ALTER TABLE `cuti`
  ADD CONSTRAINT `cuti_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `diklat`
--
ALTER TABLE `diklat`
  ADD CONSTRAINT `diklat_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `duk_pegawai`
--
ALTER TABLE `duk_pegawai`
  ADD CONSTRAINT `duk_pegawai_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `keluarga`
--
ALTER TABLE `keluarga`
  ADD CONSTRAINT `keluarga_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `keluarga_ibfk_2` FOREIGN KEY (`id_agama`) REFERENCES `agama` (`id_agama`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `kenaikan_pangkat`
--
ALTER TABLE `kenaikan_pangkat`
  ADD CONSTRAINT `kenaikan_pangkat_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `kgb`
--
ALTER TABLE `kgb`
  ADD CONSTRAINT `kgb_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `kgb_ibfk_2` FOREIGN KEY (`id_golongan`) REFERENCES `pangkat_golongan` (`id_pangkat_golongan`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `masa_kerja_pegawai`
--
ALTER TABLE `masa_kerja_pegawai`
  ADD CONSTRAINT `masa_kerja_pegawai_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `mutasi`
--
ALTER TABLE `mutasi`
  ADD CONSTRAINT `mutasi_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pegawai`
--
ALTER TABLE `pegawai`
  ADD CONSTRAINT `pegawai_ibfk_1` FOREIGN KEY (`id_agama`) REFERENCES `agama` (`id_agama`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pegawai_ibfk_2` FOREIGN KEY (`id_bidang`) REFERENCES `bidang` (`id_bidang`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pegawai_ibfk_3` FOREIGN KEY (`id_status_pegawai`) REFERENCES `status_pegawai` (`id_status_pegawai`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pegawai_ibfk_4` FOREIGN KEY (`id_jabatan`) REFERENCES `jabatan` (`id_jabatan`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pegawai_ibfk_5` FOREIGN KEY (`id_eselon`) REFERENCES `pangkat_eselon` (`id_pangkat_eselon`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `pegawai_ibfk_6` FOREIGN KEY (`id_golongan`) REFERENCES `pangkat_golongan` (`id_pangkat_golongan`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `pendidikan`
--
ALTER TABLE `pendidikan`
  ADD CONSTRAINT `pendidikan_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `penghargaan`
--
ALTER TABLE `penghargaan`
  ADD CONSTRAINT `penghargaan_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pensiun`
--
ALTER TABLE `pensiun`
  ADD CONSTRAINT `pensiun_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pttb`
--
ALTER TABLE `pttb`
  ADD CONSTRAINT `pttb_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ptth`
--
ALTER TABLE `ptth`
  ADD CONSTRAINT `ptth_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `riwayat_kerja`
--
ALTER TABLE `riwayat_kerja`
  ADD CONSTRAINT `riwayat_kerja_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `riwayat_mk`
--
ALTER TABLE `riwayat_mk`
  ADD CONSTRAINT `riwayat_mk_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rw_golongan`
--
ALTER TABLE `rw_golongan`
  ADD CONSTRAINT `rw_golongan_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rw_golongan_ibfk_2` FOREIGN KEY (`id_golongan`) REFERENCES `pangkat_golongan` (`id_pangkat_golongan`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_pegawai`) REFERENCES `pegawai` (`id_pegawai`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
