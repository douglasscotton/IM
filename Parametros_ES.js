function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

	var pais = getUrlVars()["pais"];
	var TipoProjeto = getUrlVars()["TipoProjeto"];

	if (pais == "Argentina")
	{
		var Moeda = "es-AR"

		var NUM_DAY_PROD = 21
		var NUM_HR_PROD = 8.08

		var CQ_PERCENT = 5 / 100

	 	var APM_Prep_S = 243830
	 	var APM_Prep_M = 177994
	 	var APM_Prep_C = 129975

		var APM_Scan_PB = 424200
		var APM_Scan_GR = 381780

		var APM_IDX = 848400

		var APM_REC_S = 254520

		var APM_CQ_IMG = 509040
		var APM_CQ_MOS = 152712

		var APM_TIP_1 = 62782
		var APM_TIP_2 = 49547
		var APM_TIP_3 = 36312

		var vl_Setup = 0

		if (TipoProjeto == "Recurrente")
		{
			var vl_comp = 180696.00
			var vl_ncomp = 56015.76
		}
			
		if (TipoProjeto == "No%20Recurrente")
		{
			var vl_comp = 137110.00
			var vl_ncomp = 20566.50
		}
	}

	if (pais == "Chile")
	{
		var Moeda = "es-CL"

		var NUM_DAY_PROD = 21;
		var NUM_HR_PROD = 7

		var CQ_PERCENT = 5 / 100

	 	var APM_Prep_S = 213150
	 	var APM_Prep_M = 154350
	 	var APM_Prep_C = 91875

		var APM_Scan_PB = 529200
		var APM_Scan_GR = 476280

		var APM_IDX = 755874

		var APM_REC_S = 220500

		var APM_CQ_IMG = 735000
		var APM_CQ_MOS = 735000

		var APM_TIP_1 = 54390
		var APM_TIP_2 = 42924
		var APM_TIP_3 = 31458

		var vl_Setup = 0

		var vl_comp = 31.00
		var vl_ncomp = 5.90

	}

	if (pais == "Colombia")
	{
		var Moeda = "es-CO"

		var NUM_DAY_PROD = 20
		var NUM_HR_PROD = 7.25

		var CQ_PERCENT = 5 / 100

	 	var APM_Prep_S = 206625
	 	var APM_Prep_M = 137480
	 	var APM_Prep_C = 79605

		var APM_Scan_PB = 372650
		var APM_Scan_GR = 350900

		var APM_IDX = 730800

		var APM_REC_S = 301600

		var APM_CQ_IMG = 522000
		var APM_CQ_MOS = 17400

		var APM_TIP_1 = 45385
		var APM_TIP_2 = 41760
		var APM_TIP_3 = 35960

		var vl_Setup = 0

		var vl_comp = 1436050.00
		var vl_ncomp = 439000.00

	}

	if (pais == "Peru")
	{
		var Moeda = "es-PE"

		var NUM_DAY_PROD = 21
		var NUM_HR_PROD = 8

		var CQ_PERCENT = 5 / 100

	 	var APM_Prep_S = 210000
	 	var APM_Prep_M = 178000
	 	var APM_Prep_C = 100800

		var APM_Scan_PB = 252000
		var APM_Scan_GR = 176400

		var APM_IDX = 512400

		var APM_REC_S = 289800

		var APM_CQ_IMG = 478800
		var APM_CQ_MOS = 75600

		var APM_TIP_1 = 70056
		var APM_TIP_2 = 67200
		var APM_TIP_3 = 42672
 
		var vl_Setup = 0

		var vl_comp = 1250.00
		var vl_ncomp = 904.25

	}
	if (pais == "Mexico")
	{

		var Moeda = "es-MX"

		var NUM_DAY_PROD = 21
		var NUM_HR_PROD = 8

		var CQ_PERCENT = 20 / 100

	 	var APM_Prep_S = 169029
	 	var APM_Prep_M = 169008
	 	var APM_Prep_C = 139776

		var APM_Scan_PB = 420000
		var APM_Scan_GR = 420000

		var APM_IDX = 672504

		var APM_REC_S = 179256

		var APM_CQ_IMG = 724584
		var APM_CQ_MOS = 80590

		var APM_TIP_1 = 48048
		var APM_TIP_2 = 47544
		var APM_TIP_3 = 47712

		var vl_Setup = 0

		if (TipoProjeto == "Recurrente")
		{
			var vl_comp = 13841.42
			var vl_ncomp = 2862.00
		}
			
		if (TipoProjeto == "No%20Recurrente")
		{
			var vl_comp = 12556.00
			var vl_ncomp = 2579.50
		}

	}

// VOLUMES

	if (TipoProjeto == "Recurrente")
	{
		var qtde_mes = parseInt(getUrlVars()["qtde_mes"]);
		var Pr_Volume = parseInt(getUrlVars()["Pr_Volume"]);
		var qtde_pages = parseInt(getUrlVars()["qtde_pages"]);
		var duplex = getUrlVars()["duplex"];

		var price = parseFloat(getUrlVars()["price"]).toFixed(3) * 1;

		var Vl_Paginas_Mes = (Pr_Volume * qtde_pages);
		var Vl_Img_Mes = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100)));
		var qtde_img_doc = parseFloat(parseInt(qtde_pages) * (1 + (duplex / 100)));


		var total_images = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100))) * qtde_mes;
		var fat_Total = parseInt(total_images) * parseFloat(price).toFixed(3);
		var fat_mensal = fat_Total / qtde_mes
		var vol_mensal = parseInt(total_images / qtde_mes)
		var vol_diario = parseInt(vol_mensal / 20)
		var vol_semanal = parseInt(vol_diario * 5)
		var fat_Total_Setup = fat_Total + vl_Setup
	}
	if (TipoProjeto == "No%20Recurrente")
	{
		var qtde_mes = parseInt(getUrlVars()["qtde_mes"]);
		var Pr_Volume = parseInt(getUrlVars()["Pr_Volume"]);
		var qtde_pages = parseInt(getUrlVars()["qtde_pages"]);
		var duplex = getUrlVars()["duplex"];

		var price = parseFloat(getUrlVars()["price"]).toFixed(3) * 1;

		var Vl_Paginas_Mes = (Pr_Volume * qtde_pages) / qtde_mes;
		var Vl_Img_Mes = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100))) / qtde_mes;
		var qtde_img_doc = parseInt(parseInt(qtde_pages) * (1 + (duplex / 100)));


		var total_images = parseInt((parseInt(Pr_Volume) * parseInt(qtde_pages)) * (1 + (duplex / 100)));
		var fat_Total = parseInt(total_images) * parseFloat(price).toFixed(3);
		var fat_mensal = fat_Total / qtde_mes
		var vol_mensal = parseInt(total_images / qtde_mes)
		var vol_diario = parseInt(vol_mensal / 20)
		var vol_semanal = parseInt(vol_diario * 5)
		var fat_Total_Setup = fat_Total + vl_Setup
	}


// PREPARACAO

	var type_Prep = getUrlVars()["type_Prep"];

	if (type_Prep == "Simple")
	{
		var type_Prep_Desc = "Documentos em saquinhos ou envelopes com 1-2 grampos/clipes por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_S).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_S / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

	}
	if (type_Prep == "Media")
	{
		var type_Prep_Desc = "Documentos em saquinhos ou envelopes com 3-5 grampos/clipes por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_M).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_M / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (type_Prep == "Compleja")
	{
		var type_Prep_Desc = "Documentos em pastas com Romeo e Julieta  e 1-10 grampos por documento"
		var QTDE_HC_PREP = parseFloat(Vl_Paginas_Mes / APM_Prep_C).toFixed(3);
		var APH_PREP = parseFloat(APM_Prep_C / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// SCANNER

	var type_Desc = getUrlVars()["type_Desc"];

	if (type_Desc == "Blanco%20y%20Negro")
	{
		var QTDE_HC_SCAN = parseFloat(Vl_Paginas_Mes / APM_Scan_PB).toFixed(3);
		var APH_SCAN = parseFloat(APM_Scan_PB / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (type_Desc == "Escala%20de%20Gris")
	{
		var QTDE_HC_SCAN = parseFloat(Vl_Paginas_Mes / APM_Scan_GR).toFixed(3);
		var APH_SCAN = parseFloat(APM_Scan_GR / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// CAPTURA

	var qtde_indices = parseInt(getUrlVars()["qtde_indices"]);
	var idx_1_nome = getUrlVars()["idx_1_nome"];
	var idx_1_nc = parseInt(getUrlVars()["idx_1_nc"]);
	var idx_1_tipo = getUrlVars()["idx_1_tipo"];
	var idx_2_nome = getUrlVars()["idx_2_nome"];
	var idx_2_nc = parseInt(getUrlVars()["idx_2_nc"]);
	var idx_2_tipo = getUrlVars()["idx_2_tipo"];
	var idx_3_nome = getUrlVars()["idx_3_nome"];
	var idx_3_nc = parseInt(getUrlVars()["idx_3_nc"]);
	var idx_3_tipo = getUrlVars()["idx_3_tipo"];
	var idx_4_nome = getUrlVars()["idx_4_nome"];
	var idx_4_nc = parseInt(getUrlVars()["idx_4_nc"]);
	var idx_4_tipo = getUrlVars()["idx_4_tipo"];
	var idx_5_nome = getUrlVars()["idx_5_nome"];
	var idx_5_nc = parseInt(getUrlVars()["idx_5_nc"]);
	var idx_5_tipo = getUrlVars()["idx_5_tipo"];

	if (qtde_indices == 1)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc);
	}
	if (qtde_indices == 2)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc);
	}
	if (qtde_indices == 3)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc);
	}
	if (qtde_indices == 4)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc + idx_4_nc);
	}
	if (qtde_indices == 5)
	{
		var QTDE_CARAC_DOC = parseInt(idx_1_nc + idx_2_nc + idx_3_nc + idx_4_nc + idx_5_nc);
	}
	
	var QTDE_HC_IDX = parseFloat(((Vl_Img_Mes / qtde_img_doc) * QTDE_CARAC_DOC) / APM_IDX).toFixed(3);
	var APH_IDX = parseFloat(APM_IDX / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
		
// TIPIFICACAO
	
	var tipifica = getUrlVars()["tipifica"];

	if (tipifica == 0)
	{
		var desc_tipifica = "Este projeto nao contempla tipifica&ccedil;&atilde;o de documentos"
		var QTDE_HC_TIP = 0;
		var APH_TIP = 0;
	}
	if (tipifica == 1)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 2 ate 5 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_1).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_1 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (tipifica == 2)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 6 ate 10 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_2).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_2 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}
	if (tipifica == 3)
	{
		var desc_tipifica = "Tipifica&ccedil;&atilde;o de 11 ate 15 tipos documentais"
		var QTDE_HC_TIP = parseFloat(Vl_Img_Mes / APM_TIP_3).toFixed(3);
		var APH_TIP = parseFloat(APM_TIP_3 / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);
	}

// CONTROLE DE QUALIDADE

	var QTDE_HC_CQ_IMG = parseFloat(Vl_Img_Mes / APM_CQ_IMG).toFixed(3);
	var APH_CQ_IMG = parseFloat(APM_CQ_IMG / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

	var QTDE_HC_CQ_MOS = parseFloat((Vl_Img_Mes * CQ_PERCENT) / APM_CQ_MOS).toFixed(3);
	var APH_CQ_MOS = parseFloat(APM_CQ_MOS / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

// RECOMPOSICAO

	var QTDE_HC_REC = parseFloat(Vl_Paginas_Mes / APM_REC_S).toFixed(3);
	var APH_REC  = parseFloat(APM_REC_S / NUM_DAY_PROD / NUM_HR_PROD).toFixed(0);

// TOTAL

	var QTDE_HC_TOT = parseFloat(parseFloat(parseFloat(QTDE_HC_PREP) + parseFloat(QTDE_HC_SCAN) + parseFloat(QTDE_HC_IDX) + parseFloat(QTDE_HC_TIP) + parseFloat(QTDE_HC_CQ_IMG) + parseFloat(QTDE_HC_CQ_MOS) + parseFloat(QTDE_HC_REC)).toFixed(3)).toFixed(3);
	
// FINANCEIRO

	var COST_COMP = parseFloat(vl_comp * QTDE_HC_TOT).toFixed(2);
	var COST_NCOMP = parseFloat(vl_ncomp * QTDE_HC_TOT).toFixed(2);
	var COST_TOTAL = parseFloat(COST_COMP) + parseFloat(COST_NCOMP);
		
	var MARGEM = (parseFloat(fat_mensal) - parseFloat(COST_TOTAL)) / parseFloat(fat_mensal);
	