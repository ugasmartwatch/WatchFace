const X = 140, Y = 40;

Graphics.prototype.setFontPTSerif = function(scale) {
  this.setFontCustom(
    atob('AAAAAAAAAAAAAD44P7g/uD84AAAgADgAOAA4ADgAOAAAAABgBvAP8B/gHHAP8B/gHkAUABw4Pjg/OH/8f/x//
         DH4MfAA8BwAPgg+GDZ4PvA/wD/wD/gO+Bz4OPgw+BD4AGAAAADwAfA/+D/4P5g/yD/4PPgE+Af4B/gHGAQIIAA
         4ADgAMAAD4A/4H/w//ngPYANgA3APP/4f/g/4B+A8ADwAfgB+AH4APAA8AAEAAQABAA/gD+AP4AEAAQABAAAZA
         DsAPwA+ABgAgACAAIAAgACAAIAAAAAQADgAOAA4AAgAPgD8A/APwD4AOAAP4B/wP/g/+CAIP/g/+B/wD+AAABA
         IEAgf+D/4P/g/+AAIAAAYGDwYPHgw+DHYP5g/+B54CHgwGDg4OTgzGDcIP/g9+DHwIPAAwAHAB8APSB/4P/g/+
         D/4AEgAOB84Pzg/CDOYM/hz+HHwQMAD4AfwD/gf+BsIM/gj+CP4AfA4ADgAOBgw+DP4N/g/ADwAMAAMcB74P/g
         /+COIP/g/+D74HPAPAB+IP4g/mCC4P/A/8B/gH4AAAAc4BzgHOAc4AAAHGQc/Bz8HPgAAAQADAAeAB4ANwA3AG
         OAYYAhgBIAEgASABIAEgASABIAEgASACAAYYBxgHOAOwAeAB4ADAAMAEAA4ADm4I7g/uD44PgAcAAAAA/gP/B4
         eGfYz+zf7J9kmOSf5J/k3+T+YHDgP8AfgAYAAGAB4AfgP6D+IPoA/yB/4B/gA+AA4AAggCD/4P/g/+D/4Iwg/u
         D/4P/gc8AfAH/Af8D/4ODgwGCAIODg8eDx4IAg/+D/4P/g/+CAIMBg8eD/4H/AP4AfAIAg/+D/4P/g/+CEIM4g
         7uDg4IDggCD/4P/g/+D/4IQgzgDuAOAAHwB/wH/A/+Dg4MBggiDD4PPg8+BDwIAg/+D/4P/g/+CEIIQg/+D/4P
         /g/+CAIIAg/+D/4P/g/+CAIIAE//z//P/4//CAAIAg/+D/4P/g/+CfIL/A++Dx4MDggGCAIP/g/+D/4P/ggCAA
         IAHgAeCAIP/g/+D/4P4g/8Af4APgD8B/IP/g/+D/4P/ggCCAIP/g/+D/4PggfgAfAI/A/+D/4P/gwAAfAH/Af8
         D/4ODggCCAIODg/+B/wH/AHwCAIP/g/+D/4P/ggiD+AP4A/gB8AD4A/4D/mf/ZwdkAWQBZwd3/zP+M/4w+DIAg
         /+D/4P/g/+CHIP/A/+D/4HjgAGBx4Png/eD8IJ4gz+Dn4OfAw8DwAPAA4CD/4P/g/+D/4IAg4CDwAPAAgAD/wP
         /A/+D/4IAgACCAYP/g/8D/gMAA8AD8AP+A/+Cf4APgj+D/gPwA8ACAAMAA+AD/AP/g/+CH4A/gfwD8AP+Af+AP
         4I/g/8D+APAAgACAIMDg8eD74P8gvwCfoP/g8+Dh4MBggCCAAOAA8CD8IP/gn+CP4L/g+CDgAMAA4GDg4OPgh+
         CfoL8g/CD4YODgwOH//f/9//3//QAE8AB8AB8AB8AB8AB5AAX//f/9//3//'),
    32,
    atob("BAYHCQkODgQGBgcJBQcFBgkJCQkJCQkJCQkFBgkJCQgRDAoKDAoJCwwGBgsJDwwMCgwLCQsLDBEMCwoFBgU="),
    16+(scale<<8)+(1<<16)
  );
  return this;
};

function getImage() {
  return
require("heatshrink").decompress(atob("+fPwkA/4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH
                                      4A/AH4A/AFUzAAxH/AF3zmnMAANEAAPd7tCPf7utNw/zpvdp4EBmc/KH7t
                                      ldAJ1EmckmcvBgPd5nD/53BmT2/AEc95nCAgMykczmnd5vdn75BmfUmnM4
                                      gGCev4AhllDMoMk5gAI6lNPoMsAwNC/56/ADfzAYdEodMOxIAE4j+B7gFB
                                      l56BL/55aaoM/+Z3PP5AcCMH4AXmVDknEO64ACoaZBMP4AWmc9OrJ6Gen4
                                      AV+c8PD3M4icBMn54UO74ACn/yen4ARn80PEXMofzoZo/AB8zph4jAANNe
                                      wJq/OpYCB+Z3lAAPN7h5/PRs0PE55C4Zt/ABPzkdMPFAAB7vCN/54JmZ3q
                                      egXEOH54Imh4sAAPDOP4AG+ncPFwABn5z/AAk9O+B5/AA08PGXNPP5435n
                                      EOv4ACph4zPP4ABmZ4V5vd7h6fHIJ49+ZVU7r0iPPvzPCoAE4lEph5coZ4
                                      /OilDmczn4eCawcznh5W6Z58aqlDOgQkLQoNM7gmSEpoAuZyfCKKXzmigT
                                      PHX0JqHUmajo5p56+ZNQ4YrZPSHN6Z4/ABHEok/Fzczph5OUzIAdmczPBx
                                      2cAAc9PJ1PPH7wGGUM8GJvTPOv0n7AOeMAzCGRvUl54z+VPphFM7hFj+Z5
                                      NoisiIaNPnjwM5hElGhnMmjyzof8IRfd4Y2mPJnEPOcz+hCLmdDG842M4Y
                                      2oABPz+ZAK4Xzn44pPP3z/54LHNlMHJVDp54wn4/K5rwpAAZ5Lmg6tPAVP
                                      ng9J4Y9uPJjyvof8PHP/lg7J4kzHd00+h4Kp62vng85+nzHZPU554v/89e
                                      ZR5t+c/HRPN4Z4wPJfcn45sp88PBNPHVoAEHxPMmg4smf8PHp5K4lDG9fz
                                      +R4KO+QABphAI4cvPFczPH55K6k/G1R4K5541/5BIPIJ4rng2I4Z42+Z5J
                                      6Y1qPBU/PP/M5pCp+c0GpHEPG//+hDI76u0mZ43//8IhA0qng0IPHP/lhD
                                      H4Yzp+h4I6Z45/5EI54yon4zI6R46+ZFImZ4ongyH4h46//8IpE/Vc4yI5
                                      oynACi/I4ZGnmZ4/AA1MI48zeU4xI7548+ZGH4jAm+f8GI/TPHn/I5HDGE
                                      0zVRB49/88JA7ynlipuJDB4H4QvmmipuADH0JA9DVN3PPH3/njCuF4/CPH
                                      //PA/TPMryIO///+hIG5p4mpgvGp54//88JI3DPEoutADhJG5nTFskzFw5
                                      2/AAP0JI3Nl7ykpguGn53/AAM8JQ3UFsk0Fo3DO37ECJQ3E6bysO34AC/h
                                      KG7s/Fsc97gtFp52/AAR4G5szFkfy5otF4Z1/AAX0PI3DeUlNeQx1/AAc8
                                      PIzyknp4G551/AAXzeQ9PFkfdFgvEOv7yLmgskeQvNl51/AAbys5osFmZ0
                                      /AAf8Yorys4Z0/AAlEeWPEn50/JglNeWMjOn4AEmhMFeVfDl50/JhTysmR
                                      0/JhbysFcYAh4byxFcgAg/k8Y1TyGl50/AAfzJgvMmSlkeQorkAEE8JgvD
                                      n7yqFcjynmbyq+Z0/eRdDY0lNeQsvOn7yK4h4k+ilFmR0/eRczFkkteX7y
                                      RJkvzFYnMmh0/eRcyFkqlFp50/eRc/FsjyF6h0/AAlMJgszFkn8FYnN550
                                      /AAf0PAvTU1h0/JZXNp4sk+Z4FeX4AEmhLF6gtlngtFn51/YgfceQpLmPA
                                      vDOv4ADnpLF6Ytl+gtFp51/eQZKF5oumlguFOv4ADnjEsU43POv4ACmZKF
                                      4Yum/jy/YZLyGn4vmpinsADcyPAvPVE4uFl52/JITDunguE4h2/JJHMF9A
                                      uF55u3p4JImZJFCBIAe+YvFn7n3NBHzphIE4Y6o/gvuW54KIljCFHdKpFX
                                      JAAupg4ImZ4F560qVNwAM/nEIYgDD7hHE4Y7p+gwvWxryD+Q9DpjBwngwE
                                      IAYAypixEHoc9PAsvHlSqwWpfNXYs/ewPcIwiIEAE3zGOAAJ+hyCAoY9B+
                                      Z4FYFn8GInPPGa0BWAa6CP4MtPAqIDAFE8GWIAH7nEAocsP4X0phFERAYA
                                      pGYhCEAF6zBV4c9HgXzXwpFt+asyPA41DH4R/BkhEERAgAp+QzEp54x/g1
                                      BAwdMHYUzPApEuIAStwAAf0Ggr4D+csIYgIBAFo6BAAXEPGHzGgPPAwXyP
                                      4XzIQhDxV4iuvAAIzB4QGFl//mh4EQIJCxAAVPGt9MGYIGDdoKzBkZ4FIW
                                      HzV+hxB5nSmdMn/05nNeI/TPF//HgIAC4g0u/hsE4czAYMz5vcBYp4wIgo
                                      3u+R4GpjuFAAT6BPO3PGVnzNgkjkc8PBHMn8/POI+El4ysdQfEmc07h4Jp
                                      9DeeUsWQirvofzmg3D5p4FoZ4zYAp4u4X/mZ+DPA/Tki5sAA46D4Yvq/io
                                      C+dEPAfEnp4Gnjy0+Y7D54vp+guCmnMpg1Dewj4Cni4rPPAuD7pxFAA3EP
                                      AM/PPXzFkwtEABnNnvCmZ40PIvDplDFck/FYXcAYYEDAAvd4U0PGoABXAg
                                      BBPUagBE4J4OnnEnh43PIgACok/FMFElh4B4h0BPgKoBAA/c4c8G8IAW+Z
                                      CF4gohnjxBNAR4BFYJ4I5nDlnfeXB5E4nzmS6gnonCkdN7nTFgL2BPBFMH
                                      IJ54/7JBAAPP+fzoh4imdE5lDAoL2BAA9DHYNDPHP/li7DmjyB+czErc0P
                                      AbuBPQPMppzD5oEDfwIABPHR5F5nCn6/B4lCP4IAWOgIABknM7oqEAAQID
                                      AAgwYAEZADoZ2BAAnTEa3zDYQiFPAbwEPH4AB/hBEnhJF4Z4WOoXcEAoJC
                                      PBNPPHf/7nDlp5CPDn/dwqhD+h4CoiEFFzIAlJQNPd4XzJY3En4jTlgdHB
                                      QIrBoguCPQvCPHhKC/5SCJoQAFkczolDPp4cH4czfYPEpoIC5oPFPHp2B4
                                      bvC4hSBAAh0CmckoR4XfQ/NeQsvPHv05lP/hEB4R5F4jtPAAPzmhuGABR4
                                      Fmby+/nE+bKCeY3PO6AbBpp4Wmh4+/88p8zOoXCnhMD5ryPO4LYBPCHUAg
                                      fEngrPAGHz/8zYYRIBO4QGCJxny5kjDwJxJUAQAD4YMFPH56DmhSDPIaBC
                                      4RQK+nDPgYAIEIQAD6QCB7vMmfMOv55Eoh5DOoRRCepf8p4DBcwwAC6h4G
                                      mYSDmnCOn55KABBvCCwoIB+YYI4kzPAvNPAncEY55/kZ5M54WGokzmQTI4
                                      f/eI/cAgVDn8zOf4AGoR4LeY/zoRkDeAs//8sBAqLE6c84Rx/eY/DeZgWH
                                      cozwDBY3DmgQFeYJy/PI9DpreE5oGEoZ4OeAQLGoagGCIYA/AAv0n8kZgX
                                      NAIPdohbB5vUCYkzeA/TPBAAB6k0D4PEoR3/PJk8ZwXDL4VDmczkVCCIXz
                                      lh4HRAMzkYJF4Uzn8zSAJ2/ABvzn/zOQXD+ReCOwbjJABTp/PKwCBK4J3B
                                      PgNN5nEPBXEph4J6dEPP4AZPIPEfQMzBIf0O4sjeZnEmZ6/fDNM6ZbB+Ze
                                      DdQbiB/h3L5tDO/4AbmdPQQxpCM4M8O5VEmbw/AEv0dhZ1Bdv77r7h0G6c
                                      jOoPzO/4Ar+c0dYk/mhI/POVM5nEdQP0dpUzmcykkkkUzf/56hNAIECp4M
                                      HknMAANCCQMzkVEolCPf4AjobrElp1CokjN459BPP4Ai+nDmcydgVDfoQA
                                      LBxwA/PKncOwLrIABT0/AEPzoZj/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/
                                      AH4A/AH4A/AH4A/AH4A/AH4A/AEvwA="));
}

const mountain  = {
  width: 500,
  height: 400,
  bpp: 16,
  buffer: require("heatshrink").decompress(atob("6Fogdt23bAX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4CQt//AAv7J
                                                X4C+Qw3/I/4C9t6G/AX6G/AX6G/AX6G/AX6G/AX6Gp/ZK/AXG
                                                /QI3//xK/Q36G/AX6G/AX6G/AX6G/AX6G/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4Cdv//AAhH/AX6G/AX6G/A
                                                X6G/AX6G/AX6G/AX6Gj3//tu//d9I/4C/v//Q34C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/ASO3/4AL9pQ/Q36G/Q36G/AX6G/
                                                AX6G/AX6G/AX4CbQ34C/AQu3Q34C/ARSDF/pH/AX6G/AX6G/A
                                                X6G/AX6G/AX6G/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AU//AAwyoGA//PX6G/Q
                                                36Gb+yGw9p6/Q36G/QzQyoQ36G/Q34Cc76G4PX6G/Q34C/AQq
                                                DE9pH/AX6G/AX6G/AX6G/AX6Ga/pH/AX6GSCIhW/AX/bt6GEv
                                                5H/AX6GF//2I/6G/Q34C/Q34C/Q34C/Q34C/Q34C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4Cf/4AE/pH/AX6G
                                                /AX6G/AX6G/AX6G/AX6G/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AU3/AAntI/4C/Q34C/AQvfQ34C/Q3
                                                4C/Q34C/Q34C/ATaG/AX6G/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4CM7//ABhQ/AW6FNQ36G/Q34C/76G/AX6G/AX4CMQpqG/AX
                                                HfQpm/KH6G/Q34C/AQV/Qg37JX6G/Q34C/Q34C/Q34C/Q34C/
                                                Q34C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX/bv+//9vIn4C/Qwf/Q34C
                                                /Qw//+xE/AX6G/AX6G/AX6GTIn4C/Qw32In4C/Q34C/ARaICA
                                                BKS/Q36G/AX6G/AX6G/AX6G/AX6G/AX4Ccv6DI3//t5N/Q34A
                                                C/qG/AX3fQwvtI/6G/Q34C/Q34C/Q34C/Q34C/Q34C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AVG//4ABIn4C/Q34C/Q34C/Q34C/Q34C/Q34C/AVCI
                                                CAAPtI/4C/Q34C/Q34C/Q34C/Q34C/Q34C/Q34C/Q34C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C62//AAn7I/6G/Q34C/Q34C/Q34C/Q34C/Q
                                                34C/Q0XfQgXv+5H/AX6G/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4Cit/
                                                /ABP9Jv6G/Q34C/Q34C/Q34C/Q34C/Q34C/AT9/QgpH/AX6G/
                                                AX6G/AX6G/AX6G/AX6G/AX6G/AX6G/AX4C/AU+3XooAE/xN/A
                                                XO/Q34C/AQu3Q34C/AQu/Q34C/Q34C/Q34C/ASn7QpH9+xN/A
                                                XO3QwO/Q34C/AQ3fQwvtI/6G/Q34C/Q34C/Q34C/Q34C/Q34C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/ASX/AAn2I/4C/Q34C/Q34C/Q34C/ASdvQ34C/
                                                Q34C/ARv+QodtQ34C/tqFDQ34C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4CJt//AAhH/AX6G/AX6GN+xH/Q36G/AX6G/AX6G
                                                /AX6GaI/4C/Q34Cj35jFI/4C/Q34C/Q34C/Q34C/Q34C/Q34C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4Cu/4ACIn4C/Q34C/ARN/Q34C/A
                                                QqFCQ34C/Q34C/Q34C/RLH/Inu/IYn+Q36G/Q36G/QxhE9IP6
                                                G/Q36G/Q36G/Q36Gd/yG/Q36G/AQvfIon/9pE8AX6G/AX6G/A
                                                X6G/AX6G/AX6G/AX4C/AVVvZYnvI/4C/tv3Q34C/AQlvQoYAB
                                                +xH/Q36G/AX6G/AX6G/AX6G/AX6G/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4Cs/4APKH6G/Q36G/Q34C/Q34C/
                                                Q34C/Q34C/ATXfQJBK/ARBOF+yG/AX6G/QH6G/Q34CMt6G/QH
                                                6G/Q36G/Q34CUQ36A/Q3QC/AX4C/AX4C/AX4C/AX4C/AX4C/A
                                                X4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C
                                                /AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4
                                                C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4CK7/
                                                /AAgyq3/bGIh6/Q34CB9o1C/x6/QyhZBGVG/GIp6/Q36G/Q36
                                                G/Q36G/Q36G/Q36G/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX
                                                4C/AX4C/AX4C/ARe//4AEI/4C/Q34C/AQ23Q34C/Q34C/Q34C
                                                /Q34Cn35TF//tJX6G/Q34C/Q34C/Q34C/Q34C/Q34C/Q34C/Q
                                                34C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/
                                                AX4C/AX4C/AX4C/AX4C/AX4C/AX4C/AR4A=")),
};

var ang = 0;

function draw() {
  ang += 0.1;
  g.drawImage(getImage(), 90, 25, {scale:1, rotate:ang});
  g.drawImage((mountain), 1, 130, {scale:0});
  
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = (" "+h).substr(-2) + " : " + m.toString().padStart(2,0);
  g.reset();
  g.setFont("PTSerif", 2);
  g.setFontAlign(1,1); 
  g.drawString(time, X, Y, true);
  g.setFont("PTSerif");
  g.setFontAlign(0,1); 
  var dateStr = "    "+require("locale").date(d)+"    ";
  g.drawString(dateStr, g.getWidth()/2, Y+12, true);
}
setInterval(draw, 950);


g.clear();
draw();
var secondInterval = setInterval(draw, 1000);
Bangle.on('lcdPower',on=>{
  if (secondInterval) clearInterval(secondInterval);
  secondInterval = undefined;
  if (on) {
    secondInterval = setInterval(draw, 1000);
    draw(); 
  }
});

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
