Search.setIndex({docnames:["backend","compliance.kaldi","datasets","functional","index","kaldi_io","models","pipelines","prototype","sox_effects","torchaudio","transforms","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["backend.rst","compliance.kaldi.rst","datasets.rst","functional.rst","index.rst","kaldi_io.rst","models.rst","pipelines.rst","prototype.rst","sox_effects.rst","torchaudio.rst","transforms.rst","utils.rst"],objects:{"torchaudio.backend.common":{AudioMetaData:[0,0,1,""]},"torchaudio.backend.soundfile_backend":{info:[0,1,1,""],load:[0,1,1,""],save:[0,1,1,""]},"torchaudio.backend.sox_io_backend":{info:[0,1,1,""],load:[0,1,1,""],save:[0,1,1,""]},"torchaudio.compliance.kaldi":{fbank:[1,1,1,""],mfcc:[1,1,1,""],spectrogram:[1,1,1,""]},"torchaudio.datasets":{CMUARCTIC:[2,0,1,""],CMUDict:[2,0,1,""],COMMONVOICE:[2,0,1,""],DR_VCTK:[2,0,1,""],GTZAN:[2,0,1,""],LIBRISPEECH:[2,0,1,""],LIBRITTS:[2,0,1,""],LJSPEECH:[2,0,1,""],SPEECHCOMMANDS:[2,0,1,""],TEDLIUM:[2,0,1,""],VCTK_092:[2,0,1,""],YESNO:[2,0,1,""]},"torchaudio.datasets.CMUARCTIC":{__getitem__:[2,2,1,""]},"torchaudio.datasets.CMUDict":{__getitem__:[2,2,1,""],symbols:[2,2,1,""]},"torchaudio.datasets.COMMONVOICE":{__getitem__:[2,2,1,""]},"torchaudio.datasets.DR_VCTK":{__getitem__:[2,2,1,""]},"torchaudio.datasets.GTZAN":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LIBRISPEECH":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LIBRITTS":{__getitem__:[2,2,1,""]},"torchaudio.datasets.LJSPEECH":{__getitem__:[2,2,1,""]},"torchaudio.datasets.SPEECHCOMMANDS":{__getitem__:[2,2,1,""]},"torchaudio.datasets.TEDLIUM":{__getitem__:[2,2,1,""],phoneme_dict:[2,2,1,""]},"torchaudio.datasets.VCTK_092":{__getitem__:[2,2,1,""]},"torchaudio.datasets.YESNO":{__getitem__:[2,2,1,""]},"torchaudio.functional":{DB_to_amplitude:[3,1,1,""],allpass_biquad:[3,1,1,""],amplitude_to_DB:[3,1,1,""],angle:[3,1,1,""],apply_codec:[3,1,1,""],band_biquad:[3,1,1,""],bandpass_biquad:[3,1,1,""],bandreject_biquad:[3,1,1,""],bass_biquad:[3,1,1,""],biquad:[3,1,1,""],complex_norm:[3,1,1,""],compute_deltas:[3,1,1,""],compute_kaldi_pitch:[3,1,1,""],contrast:[3,1,1,""],create_dct:[3,1,1,""],create_fb_matrix:[3,1,1,""],dcshift:[3,1,1,""],deemph_biquad:[3,1,1,""],detect_pitch_frequency:[3,1,1,""],dither:[3,1,1,""],edit_distance:[3,1,1,""],equalizer_biquad:[3,1,1,""],filtfilt:[3,1,1,""],flanger:[3,1,1,""],gain:[3,1,1,""],griffinlim:[3,1,1,""],highpass_biquad:[3,1,1,""],inverse_spectrogram:[3,1,1,""],lfilter:[3,1,1,""],linear_fbanks:[3,1,1,""],lowpass_biquad:[3,1,1,""],magphase:[3,1,1,""],mask_along_axis:[3,1,1,""],mask_along_axis_iid:[3,1,1,""],melscale_fbanks:[3,1,1,""],mu_law_decoding:[3,1,1,""],mu_law_encoding:[3,1,1,""],overdrive:[3,1,1,""],phase_vocoder:[3,1,1,""],phaser:[3,1,1,""],pitch_shift:[3,1,1,""],resample:[3,1,1,""],riaa_biquad:[3,1,1,""],rnnt_loss:[3,1,1,""],sliding_window_cmn:[3,1,1,""],spectral_centroid:[3,1,1,""],spectrogram:[3,1,1,""],treble_biquad:[3,1,1,""],vad:[3,1,1,""]},"torchaudio.kaldi_io":{read_mat_ark:[5,1,1,""],read_mat_scp:[5,1,1,""],read_vec_flt_ark:[5,1,1,""],read_vec_flt_scp:[5,1,1,""],read_vec_int_ark:[5,1,1,""]},"torchaudio.models":{ConvTasNet:[6,0,1,""],DeepSpeech:[6,0,1,""],Tacotron2:[6,0,1,""],Wav2Letter:[6,0,1,""],Wav2Vec2Model:[6,0,1,""],WaveRNN:[6,0,1,""],hubert_base:[6,1,1,""],hubert_large:[6,1,1,""],hubert_xlarge:[6,1,1,""],wav2vec2_base:[6,1,1,""],wav2vec2_large:[6,1,1,""],wav2vec2_large_lv60k:[6,1,1,""],wav2vec2_model:[6,1,1,""]},"torchaudio.models.ConvTasNet":{forward:[6,2,1,""]},"torchaudio.models.DeepSpeech":{forward:[6,2,1,""]},"torchaudio.models.Tacotron2":{forward:[6,2,1,""],infer:[6,2,1,""]},"torchaudio.models.Wav2Letter":{forward:[6,2,1,""]},"torchaudio.models.Wav2Vec2Model":{extract_features:[6,2,1,""],forward:[6,2,1,""]},"torchaudio.models.WaveRNN":{forward:[6,2,1,""],infer:[6,2,1,""]},"torchaudio.models.wav2vec2.utils":{import_fairseq_model:[6,1,1,""],import_huggingface_model:[6,1,1,""]},"torchaudio.pipelines":{HUBERT_ASR_LARGE:[7,3,1,""],HUBERT_ASR_XLARGE:[7,3,1,""],HUBERT_BASE:[7,3,1,""],HUBERT_LARGE:[7,3,1,""],HUBERT_XLARGE:[7,3,1,""],TACOTRON2_GRIFFINLIM_CHAR_LJSPEECH:[7,3,1,""],TACOTRON2_GRIFFINLIM_PHONE_LJSPEECH:[7,3,1,""],TACOTRON2_WAVERNN_CHAR_LJSPEECH:[7,3,1,""],TACOTRON2_WAVERNN_PHONE_LJSPEECH:[7,3,1,""],Tacotron2TTSBundle:[7,0,1,""],WAV2VEC2_ASR_BASE_100H:[7,3,1,""],WAV2VEC2_ASR_BASE_10M:[7,3,1,""],WAV2VEC2_ASR_BASE_960H:[7,3,1,""],WAV2VEC2_ASR_LARGE_100H:[7,3,1,""],WAV2VEC2_ASR_LARGE_10M:[7,3,1,""],WAV2VEC2_ASR_LARGE_960H:[7,3,1,""],WAV2VEC2_ASR_LARGE_LV60K_100H:[7,3,1,""],WAV2VEC2_ASR_LARGE_LV60K_10M:[7,3,1,""],WAV2VEC2_ASR_LARGE_LV60K_960H:[7,3,1,""],WAV2VEC2_BASE:[7,3,1,""],WAV2VEC2_LARGE:[7,3,1,""],WAV2VEC2_LARGE_LV60K:[7,3,1,""],WAV2VEC2_XLSR53:[7,3,1,""],Wav2Vec2ASRBundle:[7,0,1,""],Wav2Vec2Bundle:[7,0,1,""]},"torchaudio.pipelines.Tacotron2TTSBundle":{TextProcessor:[7,0,1,""],Vocoder:[7,0,1,""],get_tacotron2:[7,2,1,""],get_text_processor:[7,2,1,""],get_vocoder:[7,2,1,""]},"torchaudio.pipelines.Tacotron2TTSBundle.TextProcessor":{__call__:[7,2,1,""],tokens:[7,2,1,""]},"torchaudio.pipelines.Tacotron2TTSBundle.Vocoder":{__call__:[7,2,1,""],sample_rate:[7,2,1,""]},"torchaudio.pipelines.Wav2Vec2ASRBundle":{get_labels:[7,2,1,""],get_model:[7,2,1,""],sample_rate:[7,2,1,""]},"torchaudio.pipelines.Wav2Vec2Bundle":{get_model:[7,2,1,""],sample_rate:[7,2,1,""]},"torchaudio.prototype.emformer":{Emformer:[8,0,1,""]},"torchaudio.prototype.emformer.Emformer":{forward:[8,2,1,""],infer:[8,2,1,""]},"torchaudio.sox_effects":{apply_effects_file:[9,1,1,""],apply_effects_tensor:[9,1,1,""],effect_names:[9,1,1,""],init_sox_effects:[9,1,1,""],shutdown_sox_effects:[9,1,1,""]},"torchaudio.transforms":{AmplitudeToDB:[11,0,1,""],ComplexNorm:[11,0,1,""],ComputeDeltas:[11,0,1,""],Fade:[11,0,1,""],FrequencyMasking:[11,0,1,""],GriffinLim:[11,0,1,""],InverseMelScale:[11,0,1,""],InverseSpectrogram:[11,0,1,""],LFCC:[11,0,1,""],MFCC:[11,0,1,""],MVDR:[11,0,1,""],MelScale:[11,0,1,""],MelSpectrogram:[11,0,1,""],MuLawDecoding:[11,0,1,""],MuLawEncoding:[11,0,1,""],PSD:[11,0,1,""],PitchShift:[11,0,1,""],RNNTLoss:[11,0,1,""],Resample:[11,0,1,""],SlidingWindowCmn:[11,0,1,""],SpectralCentroid:[11,0,1,""],Spectrogram:[11,0,1,""],TimeMasking:[11,0,1,""],TimeStretch:[11,0,1,""],Vad:[11,0,1,""],Vol:[11,0,1,""]},"torchaudio.transforms.AmplitudeToDB":{forward:[11,2,1,""]},"torchaudio.transforms.ComplexNorm":{forward:[11,2,1,""]},"torchaudio.transforms.ComputeDeltas":{forward:[11,2,1,""]},"torchaudio.transforms.Fade":{forward:[11,2,1,""]},"torchaudio.transforms.FrequencyMasking":{forward:[11,2,1,""]},"torchaudio.transforms.GriffinLim":{forward:[11,2,1,""]},"torchaudio.transforms.InverseMelScale":{forward:[11,2,1,""]},"torchaudio.transforms.InverseSpectrogram":{forward:[11,2,1,""]},"torchaudio.transforms.LFCC":{forward:[11,2,1,""]},"torchaudio.transforms.MFCC":{forward:[11,2,1,""]},"torchaudio.transforms.MVDR":{forward:[11,2,1,""]},"torchaudio.transforms.MelScale":{forward:[11,2,1,""]},"torchaudio.transforms.MelSpectrogram":{forward:[11,2,1,""]},"torchaudio.transforms.MuLawDecoding":{forward:[11,2,1,""]},"torchaudio.transforms.MuLawEncoding":{forward:[11,2,1,""]},"torchaudio.transforms.PSD":{forward:[11,2,1,""]},"torchaudio.transforms.PitchShift":{forward:[11,2,1,""]},"torchaudio.transforms.RNNTLoss":{forward:[11,2,1,""]},"torchaudio.transforms.Resample":{forward:[11,2,1,""]},"torchaudio.transforms.SlidingWindowCmn":{forward:[11,2,1,""]},"torchaudio.transforms.SpectralCentroid":{forward:[11,2,1,""]},"torchaudio.transforms.Spectrogram":{forward:[11,2,1,""]},"torchaudio.transforms.TimeMasking":{forward:[11,2,1,""]},"torchaudio.transforms.TimeStretch":{forward:[11,2,1,""]},"torchaudio.transforms.Vad":{forward:[11,2,1,""]},"torchaudio.transforms.Vol":{forward:[11,2,1,""]},"torchaudio.utils":{sox_utils:[12,4,0,"-"]},"torchaudio.utils.sox_utils":{get_buffer_size:[12,1,1,""],list_effects:[12,1,1,""],list_read_formats:[12,1,1,""],list_write_formats:[12,1,1,""],set_buffer_size:[12,1,1,""],set_seed:[12,1,1,""],set_use_threads:[12,1,1,""],set_verbosity:[12,1,1,""]},torchaudio:{get_audio_backend:[10,1,1,""],info:[10,1,1,""],list_audio_backends:[10,1,1,""],load:[10,1,1,""],save:[10,1,1,""],set_audio_backend:[10,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","function","Python function"],"2":["py","method","Python method"],"3":["py","data","Python data"],"4":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:function","2":"py:method","3":"py:data","4":"py:module"},terms:{"000":7,"0008":9,"0012":9,"003":[3,11],"0035":9,"005":3,"0061":9,"0076":9,"0096":9,"0110":9,"03193":6,"0431e":9,"0436":9,"0650e":9,"06670":7,"07447":[6,7],"0832":9,"08435":6,"0db":[3,9],"100":[1,2,3,7,11],"1000":3,"100000":11,"100000000":8,"1024":6,"1025":3,"10283":2,"107m":7,"10min":7,"1100":7,"11025":7,"1109":[3,6,7,11],"112kbp":0,"11477":[6,7],"1151e":9,"1172092":[3,11],"1211":[3,11],"1256":6,"1266":6,"128":[0,6,8,11],"128khz":0,"1331":9,"13979":7,"1412":6,"148":6,"14th":[3,11],"150":[3,11],"16000":[1,9,11],"1609":6,"179d6e9a88202ab0a2f":11,"1802":6,"1860e":9,"18g":7,"1912":7,"1929":11,"1983":[3,11],"1e8":8,"1e9":3,"1mb":7,"200":[6,8],"2000":[3,6,11],"2006":[6,7],"2009":11,"201":11,"2011":3,"2012":[3,11],"2013":[3,11],"2014":[3,6,7],"2015":[3,7,11],"2016":[6,11],"2017":[7,11],"2018":6,"2019":[6,11],"2020":[6,7],"2021":[6,7,8],"2048":[6,7,8],"2106":[6,7],"21437":[7,11],"2188e":9,"231":3,"2434":9,"2494":3,"2498":3,"25080":[3,11],"25344":11,"256":[6,11],"257":11,"260":11,"2680":11,"275":7,"276":11,"2826":7,"2915167":6,"2ch":9,"300":[3,9],"3000":3,"3038":2,"3138":9,"3400":3,"3443":2,"360":[2,7],"360m":7,"3711":[3,11],"3783":9,"3mb":7,"400":[3,8,11],"4000":3,"4122e":9,"44100":3,"4761e":9,"4779":6,"4783":6,"4800":9,"48000":3,"4935":9,"500":[1,2,3,7],"5054":9,"512":[3,6,8,11],"5176":9,"5206":7,"5210":[7,11],"5214":11,"5442":9,"5518":9,"5567":6,"600":[3,11],"6000":[3,11],"60k":6,"6159e":9,"6701851":[3,11],"6783":8,"6787":8,"6854049":3,"6924e":9,"6mb":7,"7000":3,"707":3,"7178964":7,"7495":9,"7620":9,"7669":7,"7673":7,"780":11,"793":11,"7b98e3e":[3,11],"800":11,"8000":9,"804":[3,11],"807":[3,11],"8073e":9,"8103e":9,"8114e":9,"8233":9,"88200":3,"8mb":7,"9019":9,"908":3,"9140":9,"960":7,"96000":3,"960h":6,"9mb":7,"abstract":7,"break":4,"byte":[0,9,12],"case":[0,3,6,11],"class":[0,2,3,6,7,8,9,11],"default":[0,1,2,3,6,7,8,11],"final":3,"float":[0,1,3,6,7,8,11],"function":[0,4,7,8,9,11,12],"import":[6,7,8,11],"int":[0,1,2,3,5,6,8,9,10,11,12],"long":[4,9],"mazar\u00e9":7,"nathana\u00ebl":[3,11],"new":[0,3,9],"public":7,"return":[0,1,2,3,5,6,7,8,9,10,11,12],"rivi\u00e8r":7,"s\u00f8ndergaard":[3,11],"short":[3,11],"super":9,"switch":[0,10],"true":[0,1,2,3,6,8,9,11,12],BOS:7,CMS:1,EOS:7,For:[0,2,3,4,7,9,11],Mls:7,Not:[0,7],One:[2,3,6,10,11],TTS:[6,7],The:[0,1,2,3,4,5,6,7,9,10,11],There:[0,10],These:4,Use:[3,6,9],Used:[0,3],Uses:0,Using:[3,6],With:3,__call__:7,__getitem__:[2,9],__init__:9,__len__:[2,9],_get_strid:1,_length:[3,11],a_coeff:3,aaron:6,abc:3,abdelrahman:[6,7],abl:9,abov:[0,3,11],absolut:1,accent:2,accept:[0,9],access:7,accord:[5,11],accur:0,acm:[6,11],acoust:[3,6,7,8,11],across:[4,9],activ:[3,6,8,11],activation_dropout:6,actual:9,adam:6,adapt:0,add:[1,3,9,11],added:11,adding:3,addit:7,address:6,adjust:3,advanc:3,aew:2,aff:11,affect:[3,12],affel:[3,11],after:[3,6,9,11],again:9,age:2,ago:3,ahead:4,ahw:2,alaw:0,alex:[3,11],alexei:[6,7],alexi:7,algorithm:[3,11],alias:[3,11],all:[0,2,3,6,9,11],allow:[0,2,3,7,9,11],allowed_gap:[3,11],allpass:9,almost:2,along:[3,7,11],also:[0,2,3,4,7,9,11],alter:9,altern:[3,11],although:4,alwai:[0,9],amb:0,ames:[3,11],amin:3,amount:[3,11],amplif:3,amplifi:3,amplitud:[3,11],amplitude_to_db:11,amr:0,amr_nb:0,amr_wb:0,andrew:6,angewandt:11,ani:[3,5,11],aniel:[3,11],annot:[0,9],anoth:[0,11],anti:[3,11],anton:7,anuroop:7,apf:3,api:[2,4,7],appli:[1,3,4,6,8,11],applic:[1,3,7,11],apply_effects_fil:9,apply_effects_tensor:9,approx:0,araki:11,architectur:[6,8],arctic:2,ardila:7,area:[3,11],arg:2,argument:[0,2,3,6,7,9,11],ark:5,around:5,arrai:[3,11],arxiv:[3,6,7,11],asr:[4,11],assert:9,assert_allclos:6,assign:[3,10,11],associ:7,assum:[3,6,11],athryn:[3,11],att:[3,11],attach:6,attempt:[3,11],attenberg:[3,11],attent:[6,8],attention_dropout:6,attention_hidden_dim:6,attention_location_kernel_s:6,attention_location_n_filt:6,attention_rnn_dim:6,attenu:[3,9],audio:[0,1,2,3,4,6,7,9,10,11,12],audio_ext:2,aug:6,augment:[3,11],auli:[6,7],aup:2,author:7,automat:[3,7,9,11],aux:6,aux_num_out:6,auxiliari:6,avail:[2,4,7,8,9,10,12],averag:[3,11],avoid:[3,11],awb:2,awen:[3,11],awni:6,axb:2,axi:[3,6,11],b_coeff:3,babaali:3,babel:7,back:[3,11],backend:[3,4,12],background:[3,11],backward:[3,4,11],baevski:[6,7],bagher:3,balaz:[3,11],band:[3,9,11],bandlimit:3,bandpass:9,bank:[3,11],barret:11,base:[0,3,4,6,7,8,9,10,11],basic:9,bass:3,batch:[3,6,7,8,9,11],batch_siz:[2,6,9],bdl:2,beamform:11,becaus:[4,9,11],been:[3,11],befor:[0,1,3,6,11],begin:7,behind:4,being:[3,11],below:[6,7],benchmark:7,benesti:11,benjamin:[6,7],beta:[3,4,11],between:[3,6,11],bia:6,bin:[1,3,6,7,11],binari:[0,4],bins_per_octav:[3,11],bit:[0,3,7,9],bitrat:0,bits_per_sampl:[0,3],bitstream:2,blackman:1,blackman_coeff:1,blank:[3,11],blob:11,block:6,bolt:[6,7],book:7,bool:[0,1,2,3,6,8,9,11,12],boost:3,boot_tim:[3,11],bos:7,both:[0,3,11],branson:7,browser:7,bryan:6,buffer:12,buffer_s:12,build:[6,7,8],built:[2,11],bundl:7,burst:[3,11],bz2:2,c_t:3,cach:[7,11],cahng:[3,11],calcul:[1,3,11],call:[0,9],callabl:[7,11],can:[0,1,2,3,4,6,7,9,10,11],cannot:0,carl:6,carri:11,casagrand:6,casper:6,catanzaro:6,caus:3,causal:6,caution:1,ccrma:3,cdoubl:[3,11],ceil:[3,6,11],cent:9,center:[3,11],center_freq:3,central:3,central_freq:3,centroid:[3,11],cepstra:1,cepstral:[3,11],cepstral_lift:1,cepstrum:11,certain:[0,9],cfloat64:3,cfloat:[3,11],chain:[3,9,11,12],chan:[8,11],chang:[0,1,3,4,9,11],channel:[0,1,3,4,6,9,12],channel_id:2,channels_first:[0,3,9],chapter_id:2,charact:[3,7],characterist:[3,11],check:[7,9],checkpoint_util:6,chen:[6,7],cheng:11,ching:8,chiu:11,christian:6,chung:11,chunyang:8,cienc:[3,11],clamp:[3,11],classif:4,classifi:[4,6],clb:2,clean:[2,7,9],client:7,client_id:2,clip:[3,11],close:11,cmn:[3,11],cmn_window:[3,11],cmu:2,cmu_arct:2,cmuarctic:4,cmudict:[4,7],cmusphinx:2,coat:6,code:[2,7],codec:[0,3],coeffcient:3,coeffici:[1,3,11],collect:3,collobert:[6,7],colour:3,column:[3,11],com:[2,7,11],combin:7,command:[0,2,9],commit:4,commnad:9,common:[2,3,4,6,7,11],commonvoic:[4,7],compand:[3,11],compar:[3,6],compat:[0,1,3,4,9],compatibl:0,compil:[0,9,12],complet:[1,4],complex128:11,complex:4,complex_norm:11,complex_specgram:[3,11],complex_tensor:[3,11],complianc:4,compon:1,composit:11,compress:[0,3],comput:[1,3,6,11],compute_delta:11,conda:4,condit:[3,6],confer:[3,6,7,8,11],configur:[0,6,7,12],conjug:11,conneau:7,connect:6,consecut:6,consist:[0,4,11],const_skirt_gain:3,constant:[1,3,8,11],construct:[2,7],contain:[3,6,7,11],content:3,context:8,continu:[3,6],control:[1,3,6,11],conv1d:6,conv:6,conv_bia:6,conv_feature_lay:6,conv_po:6,conv_pos_group:6,converg:[3,11],convers:[3,11],convert:[0,2,3,6,7,11],convfeatureextractionmodel:6,convnet:6,convolut:6,convtasnet:4,cookbook:3,corpu:[2,7],correct:0,correl:3,correspind:6,correspond:[0,2,3,6,7,9],cosin:11,cost:3,could:[3,11],covari:11,coverag:4,cpu:[0,9],creat:[1,2,3,5,7,9,11],critic:3,cross:[3,6,7,11],ctc:[3,11],ctc_decod:7,cubuk:11,cued:7,current:[0,3,6,8,10,11],custom:[2,6,7],cut:[3,11],cutoff:[1,3],cutoff_freq:3,d_t:3,daniel:[3,7,11],data:[1,2,3,4,7,9,10,11],data_load:2,dataload:[2,9],dataset:[4,7,9],datashar:2,davi:7,db_multipli:3,dct:[3,11],dct_type:11,debug:12,decai:3,decibel:[3,11],decod:[3,6,7,11],decoder_dropout:6,decoder_early_stop:6,decoder_max_step:6,decoder_rnn_dim:6,decomposit:11,decreas:[3,11],deep:[6,7],deepphonem:7,deepspeech:4,def:9,defin:[2,3,9,11],definit:6,delai:3,delay_m:3,delcroix:11,delet:3,delta2:3,delta:[3,11],delta_pitch:3,den:6,denomin:[3,11],denot:11,densiti:[3,11],density_funct:3,depend:[0,1,3,5,7,11],depth:[0,3,7],depthwis:8,der:11,describ:[3,4],descriptor:5,design:3,desir:[3,9,11],detail:[0,2,3,10,11,12],detect:[0,3,9,11],detector:[3,11],determin:[0,3,11],determnin:11,dev:2,devic:[2,4,11],diag_ep:11,diag_load:11,diagon:11,diamo:6,dict:[2,11,12],dictionari:[2,5,7],dieleman:6,differ:[0,3,6,7,9,10,11],digital_biquad_filt:3,dimens:[0,1,3,6,8,9,11],dimension:3,directli:0,directori:2,discret:11,distanc:3,distinct:11,distort:3,distortionless:11,distribut:[0,3,4,6,7,11],dither:1,divid:[3,11],dl_kwarg:7,doc:[3,11],document:[0,4],doe:[0,7,9,11],doesn:0,doi:[3,6,7,11],domain:[6,7,11],done:3,doubl:[3,11],dowload:2,down:[3,11],down_vot:2,downgrad:11,download:[2,7],download_url_to_fil:7,dr_vctk:4,driven:3,drop:6,dropout:[6,8],dropout_input:6,dtype:[0,3,7,9,11],duc:8,due:[0,2],dump:9,dupoux:7,durat:[1,3,6,9,11],dure:6,dynam:3,each:[1,3,6,7,8,11],earli:4,earliest:[3,11],eas:10,edg:3,edit:3,editor:[3,11],edu:3,edward:6,eei:2,effect:[0,1,3,4,11,12],effect_nam:9,effici:[3,6,8,11],eigenvalu:11,either:[0,2,3,7,11],ekin:11,element:[1,7,8],elementwis:11,elimin:3,els:[0,1,3],elsen:6,embed:6,emform:4,emiss:[6,7],emphasi:3,empti:2,en_us_cmudict_forward:7,enabl:[2,12],enc_kernel_s:6,enc_num_feat:6,encod:[0,3,6,7,11],encoder_attention_dropout:6,encoder_attention_head:6,encoder_dropout:6,encoder_embed_dim:6,encoder_embedding_dim:6,encoder_ff_interm_dropout:6,encoder_ff_interm_featur:6,encoder_ffn_embed_dim:6,encoder_kernel_s:6,encoder_lay:6,encoder_layer_drop:6,encoder_layer_norm_first:6,encoder_n_convolut:6,encoder_num_head:6,encoder_num_lay:6,encoder_out:6,encoder_pos_conv_group:6,encoder_pos_conv_kernel:6,encoder_projection_dropout:6,end:[1,3,6,7,9,11],energi:[1,3,11],energy_floor:1,english_phonem:7,enh:11,enhanc:[3,11],enhancement_amount:3,enough:0,entir:[2,6],entri:[3,11],entropi:6,eos:7,epoch:7,eps:11,epsilon:1,equal:[3,6,11],equat:3,equival:3,ergstra:[3,11],erich:6,error:[3,9],especi:[3,11],espnet2:11,espnet:11,estim:[3,11],etc:[0,3,9,11],euclidian:11,evalu:3,even:[0,3],event:[3,11],exampl:[2,3,5,6,7,8,9,11],exce:3,except:4,exclam:2,exclud:2,exclude_punctu:2,expect:[1,3,4,7,11],explain:[2,3],explicitli:8,expon:[3,11],exponenti:11,express:[0,3],extend:[3,11],extens:[0,2,9],extent:[3,11],extra:[1,3,6,7,11],extract:[1,4,6,7],extract_featur:[6,7],extractor:6,extractor_conv_bia:6,extractor_conv_layer_config:6,extractor_mod:6,f_max:[3,11],f_min:[3,11],face:6,facebook:6,facebookresearch:7,factor:[0,1,3],fade_in_len:11,fade_out_len:11,fade_shap:11,faded_waveform:11,failur:12,fairseq:6,fals:[0,1,2,3,6,8,9,11],fast:[3,11],faster:[3,11],fatchord:6,feat:[1,3],featur:[1,4,6,7,8],feature_dim:8,feature_extractor:6,fed:6,feed:6,feedback:[3,4],feedforward:[6,8],fem:2,feng:8,fetch:10,ffn_dim:8,fft:[1,3,11],field:3,file:[0,1,2,3,5,6,7,10],file_list:9,file_or_fd:5,filedescriptor:5,filepath:[0,10],filter:[4,6,9,11],filterbank:[1,3,11],find:7,fine:[4,6],finish:6,first:[3,6,7,9],fit:[0,1],fix:[0,1],fixed_r:11,flac:[0,2],flag:4,flist:9,float32:[0,5,9,11],float64:[5,11],floor:1,florian:6,folder_in_arch:2,follow:[0,2,6,7,9,10],fool:[3,11],forc:6,form:[3,7,11],format:[0,2,3,9,10,12],forward:[3,6,8,9,11],found:[2,3,11],four:[0,7],fourier:[3,11],frac:[3,6,11],fraction:[3,11],frame:[0,1,3,6,8,11],frame_length:[1,3],frame_offset:0,frame_shift:[1,3],frame_tim:3,frames_per_chunk:3,framework:[4,6,7],franci:7,frank:8,free:0,freq:[1,3,11],freq_high:3,freq_low:3,freq_mask_param:11,frequenc:[1,3,6,7,11],from:[0,1,2,3,5,6,7,8,9,11,12],from_pretrain:6,front:[3,11],fuegen:7,full:[3,11],fulli:6,gabriel:[6,7],gain:[9,11],gain_db:3,gain_in:3,gain_out:3,gain_typ:11,gale:7,gap:[3,4,11],gate_threshold:6,gaussian:[3,11],geiring:11,gelu:8,gender:2,gener:[1,3,4,5,6,7,8,9,11],genr:2,get:[0,1,9,10,11,12],get_audio_backend:10,get_buffer_s:12,get_label:7,get_model:7,get_tacotron2:7,get_text_processor:7,get_vocod:7,ghahremani:3,gist:11,github:[7,11],give:[0,3,9,11],given:[0,1,3,4,6,7,9,11],gka:2,gleichungsaufl:11,going:6,gpdf:3,gradient:[3,11],graphem:7,grave:[3,11],greg:6,gregor:7,griffin:[3,11],griffinlim:7,group:6,group_norm:6,gsm:0,gtzan:4,guoguo:7,gzip:5,half:[3,11],half_sin:11,ham:1,han:1,handl:[0,1,2],hann_window:[3,11],hannun:6,happen:4,hardwar:3,harmon:3,has:[0,3,7,9,11,12],hash:2,hat:11,have:[2,3,6],haythamfayek:11,head:[6,8],header:[0,9],hello:7,help:[0,3,9,11],helper:7,henc:2,henretti:7,henri:[6,7],here:[0,2,7,8,11],hermitian:11,hidden:[6,7,8],high:[0,1,11],high_freq:1,higher:11,highest:[0,3,11],highlight:3,highpass:3,higuchi:11,hilda:11,hint:0,hop:[3,11],hop_length:[3,6,7,11],hot:11,hour:7,howev:[0,4,9],hp_filter_freq:[3,11],hp_lifter_freq:[3,11],hsu:[6,7],htk:[0,1,3,11],htk_compat:1,html:[0,2,3,11,12],http:[0,2,3,6,7,11,12],hub:7,hubert:4,hubert_asr:6,hubertencod:6,hug:6,hung:[6,7],hypothet:11,iang:[3,11],icar:[3,11],icassp:[3,6,7,8,11],idea:7,ideal:6,ident:[1,11],identifi:2,ieee:[3,6,7,8,11],ieto:[3,11],ignal:[3,11],ignor:[3,11],iid_mask:11,iii:0,iir:3,illustr:7,imaginari:[3,11],implement:[0,2,3,6,7,8,10,11],improv:[4,11],includ:[0,1,3,6,11],incomplet:3,increas:[3,11,12],index:[2,9],indic:[3,6,9,11],individu:1,infer:[0,6,7,8,9],infin:8,inflect:1,info:[2,3,10,11],inform:[0,7,8],init_sox_effect:9,initi:[3,4,8,11],input:[0,1,2,3,6,7,8,9,11],input_dim:8,input_length:6,input_sample_r:9,input_typ:6,insert:3,inspir:3,instal:[0,5,7],instanc:[6,7],instanti:[7,8],instead:[0,3,11],instrument:3,int16:0,int24:0,int32:[0,7,12],integ:[0,3,6,9],intens:0,intention:[0,9],interfac:[0,7],intermedi:6,intern:[3,6,7,8,9,11],internet:7,interpol:3,interpret:[0,11],interspeech:[7,11],interv:3,introduc:[3,6,8],introduct:2,invalid:2,invers:[3,11],invoc:8,iso:3,iter:[3,5,11],ito:[7,11],its:[2,3,6],jacob:11,jae:[3,11],jaitli:6,jan:3,jare:6,jit:[0,9],jmk:2,john:7,johnson:7,joiner:[3,11],joint:11,jointli:[3,11],jonathan:6,jos:3,josh:7,joulin:7,journal:11,julian:8,kahn:7,kaiser:[3,11],kaiser_window:[3,11],kalchbrenn:6,kaldi:[3,4,5],kaldi_io:4,karadayi:7,karen:6,kastnerkyl:11,kate:7,kavukcuoglu:6,kbit:0,kbp:0,kei:[2,5],keith:7,keithito:[2,7],kelli:7,kernel:[3,6,11],kernel_s:6,keyword:7,kharitonov:7,khudanpur:[3,7],knill:7,kohler:7,korai:6,korbinian:3,ksp:2,kushal:[6,7],label:[2,3,6,7,11],lack:2,lakhotia:[6,7],languag:[6,7,11],larg:[6,7],last:[1,3],latenc:[3,8,11],latest:11,law:[0,3,11],layer:[0,6,8,11],layer_norm:6,layer_norm_first:6,layerdrop:6,lead:[3,11],learn:[4,6,11],least:[3,9,11],leav:9,left:[1,3,8,11],left_context_length:8,lehman:3,len:9,length:[0,1,3,6,7,8,9,11],less:[0,3,11],level:[0,2,3,11,12],levenshtein:3,lfc:11,libmad:0,libmp3lam:0,librari:[0,7],libri:7,librispeech:[4,7],libritt:4,librosa:[3,11],libsox:[0,9,12],licens:7,light:[5,7],like:[0,4,9],likelihood:6,likhomanenko:7,lim:[3,11],limit:[4,6,7],limiter_gain:3,linda:7,lindsai:7,line:3,linear:[0,1,3,6,7,11],linear_fbank:11,lingual:7,link:0,linspac:3,linux:0,liptchinski:7,list:[2,3,4,6,7,8,10,12],list_audio_backend:10,list_effect:12,list_read_format:12,list_write_format:12,ljm:2,ljspeech:[4,7],lli:[3,11],lnh:2,load:[2,6,7,9,10,11],load_model_ensemble_and_task:6,load_state_dict_from_url:7,loader:9,locat:2,lockhart:6,log10:3,log:[1,6,11],log_lf:11,log_mel:11,logarithm:11,logit:[3,6,11],logit_length:[3,11],longer:9,loss:[4,6],lossi:0,lossless:0,louder:3,low:[1,7,8],low_freq:1,lower:[3,11],lowest:[0,3],lowpass:[3,9],lowpass_cutoff:3,lowpass_filter_width:[3,11],lp_filter_freq:[3,11],lp_lifter_freq:[3,11],lstm:6,luo:6,lv60k:7,machin:[4,11],maco:0,made:10,magnitud:[1,3,6,11],mai:[0,3,4,11],maintain:4,major:4,majora:[3,11],make:3,manual:9,map:[2,12],marc:11,mark:[2,7],marsya:2,mask:[3,6,7,11],mask_:11,mask_n:11,mask_pad:6,mask_param:3,mask_valu:[3,11],massiv:7,master:11,match:[1,3],math:3,mathbb:11,mathemat:11,mathematik:11,mathsf:11,matric:[4,11],matrix:[3,5,11],max:[3,6,7,11],max_f0:3,max_frames_lat:3,max_it:11,max_memory_s:8,max_v:3,maximum:[0,3,6,8,11],mean:[1,2,3,11],measur:[3,11],measure_dur:[3,11],measure_freq:[3,11],measure_smooth_tim:[3,11],mechan:11,mechanik:11,median:3,megan:7,mehrez:11,mel:[1,3,6,7,11],mel_fmax:7,mel_fmin:7,mel_scal:[3,11],mel_specgram:[6,11],mel_specgram_length:6,melkwarg:11,melresnet:6,melscale_fbank:11,melspec:11,melspectrogram:6,memori:8,merg:9,mesgarani:6,messag:12,meta:[0,10],metadata:[0,2],method:[0,2,3,6,9,11],metric:4,meyer:7,mfc:[3,11],mfcc:6,mic1:2,mic2:2,mic_id:2,michael:[6,7],microphon:2,might:[0,9],mike:[6,8],millisecond:[1,3],mimick:[3,11],min:3,min_cmn_window:[3,11],min_dur:1,min_f0:3,minim:[3,11],minimum:[1,3,11],minut:7,mise:11,miss:0,mit:7,mixtur:11,mod_spe:3,mode:[3,6,11],model:[3,4,7,8,11],model_fil:6,modifi:[3,11],modul:[0,3,5,6,7,9,10,11,12],modulo:[3,11],moham:[6,7],momentum:[3,11],mono:1,morai:7,more:[3,8,11],most:[0,3,9],mp3:0,mpeg:0,msk_activ:6,msk_kernel_s:6,msk_num_feat:6,msk_num_hidden_feat:6,msk_num_lay:6,msk_num_stack:6,much:3,mulawtran:11,multi:[0,3,4],multi_mask:11,multichannel:11,multilingu:7,multinomi:6,multipi:11,multipl:[2,3,7,9],multipli:[3,11],multiprocess:2,multithread:12,music:[3,11],must:[0,1,3,6,8,11],mutlithread:12,n_batch:6,n_channel:6,n_class:6,n_fc:6,n_featur:6,n_fft:[3,7,11],n_filter:[3,11],n_frame:[3,11],n_frames_per_step:6,n_freq:[3,6,11],n_hidden:6,n_iter:[3,11],n_lfcc:11,n_mel:[3,6,11],n_mfcc:[3,11],n_output:6,n_res_block:6,n_rnn:6,n_step:[3,11],n_stft:11,n_symbol:6,n_time:6,nakatani:11,nal:6,nalysi:[3,11],name:[2,9,10,12],nativ:[0,3,11],natur:6,navdeep:6,nccf:3,nccf_ballast:3,necessari:[3,7],need:[1,3,4,5,9,11],neg:[1,3,6,8,11],negative_inf:8,net:[0,2,3,11,12],network:[3,6,8,11],neural:[3,6,11],new_freq:[3,11],nightli:8,nima:6,ning:[6,7],nobutaka:11,nois:[3,11],noise_down_tim:[3,11],noise_reduction_amount:[3,11],noise_shap:3,noise_up_tim:[3,11],noisi:11,non:[2,3,6],none:[0,2,3,6,7,8,9,10,11],nonlinear:3,norm:[3,6,11],norm_var:[3,11],normal:[0,3,6,9,11],normalis:9,normalized_text:2,normalized_transcript:2,norman:6,note:[0,2,3,7,9],notic:4,nouri:6,now:9,nthread:2,num:6,num_cep:1,num_channel:0,num_class:6,num_featur:6,num_filt:3,num_fram:[0,3,8,11],num_head:8,num_lay:[6,8],num_mel_bin:1,num_ord:3,num_sampl:0,num_sourc:6,num_work:2,number:[0,1,3,6,8,11],number_of_class:6,numbr:6,numer:[3,7,11],numeric_limit:1,nvidia:6,nyquist:[1,3,11],object:[0,6,7,9,10,11],obtain:11,oct:7,octav:[3,11],off:[0,1,3,7,11],offlin:11,offset:[1,3],ogg:0,olin:[3,11],onc:[9,11],one:[0,2,3,4,6,8,9,11],onesid:[3,11],onfer:[3,11],onli:[0,1,3,6,7,8,9,11],onlin:[3,11],oord:6,open:[4,5],openmp:12,openslr:2,oper:[1,3,4,6,10,11],opihi:2,optim:11,option:[0,1,2,3,6,7,8,9,10,11,12],opu:0,order:[3,6,9,11],org:[2,3,6,7,11],orient:3,orig_freq:[3,11],origin:[2,3,6,7,11],original_text:2,ortho:[3,11],other:[0,1,2,3,6,7,9,11],otherwis:[0,3,6,9,11],our:3,out:11,output:[1,3,6,7,8,11],output_channel:6,over:[3,6,11],overlap:[3,11],overrid:[0,9],overriding_r:11,overview:4,p280:2,p315:2,p362:2,pad:[1,3,6,7,8,9,11],pad_mod:[3,11],padded_window_s:1,panayotov:7,pang:6,paper:[2,6],parallel:12,parallelli:2,paramet:[0,1,2,3,5,6,7,8,9,10,11,12],park:11,part:[3,4,7,11],particular:3,pass:[2,3,6,7,8,9,11],path:[0,2,9],pathlib:[0,2],pcm:0,pcm_:0,pcm_f:0,pcm_u:0,peak:3,pegah:3,penalty_factor:3,per:[0,3,6,8,11],perceiv:3,percentag:3,percuss:3,perform:[1,3,4,6,11],perhap:3,period:[3,11],perraudin:[3,11],perturb:9,peter:[3,11],phase:[3,11],phase_adv:3,phi:11,phonem:[2,7],phoneme_dict:2,pick:0,piecewis:1,pipe:5,pipelin:4,pitch:[3,9,11],plan:2,playback:3,pleas:[0,2,6,7,11],point:[0,1,2,3,11],pointer:3,pole:[3,9],pollaczek:11,popular:4,port:[3,11],posit:[6,11],possibl:[3,11],postnet:6,postnet_embedding_dim:6,postnet_kernel_s:6,postnet_n_convolut:6,povei:[1,3,7],power:[1,3,11],power_spectrum:6,praktisch:11,prasad:7,pratap:7,pre:[7,11],pre_trigger_tim:[3,11],preced:8,precis:[3,11],precomput:3,predict:[6,7],predictor:6,preemphasi:1,preemphasis_coeffici:1,prefer:3,prenet:6,prenet_dim:6,prenger:6,present:2,preserv:[3,9,11],pretrain:[6,7],prevent:3,previou:11,print:7,prior:[3,11],prng:12,probabl:[3,6,7,8],problem:3,process:[1,3,6,7,8,11,12],processor:7,produc:1,product:[6,11],project:[4,6,7],pronounc:2,pronounci:2,proper:[0,6],properti:[2,7],propos:11,prototyp:4,provid:[0,3,6,7,9,10,11],pseudo:[3,9],publish:[2,7],puhrsch:6,punctuat:2,purpos:7,put:1,pypi:4,pysoundfil:0,python:[6,11],q_factor:3,qiantong:7,quadrat:3,qualiti:0,quantis:3,quantiz:3,quantization_channel:[3,11],quarter_sin:11,quiet:[3,11],quieter:[3,11],quitet:11,quoc:11,ragni:7,rand:[8,9],rand_init:[3,11],randint:8,randn:[3,9,11],random:[3,9],randomli:[3,11],randomperturbationfil:9,rang:[0,1,3,12],rate:[0,3,7,9,11],rath:7,ratio:11,raw:[1,3,6,11],raw_energi:1,read:[0,5,9,12],readm:2,real:[3,11],reason:[3,11],receiv:6,recognit:[3,6,7,8,11],recommend:1,recomput:3,recompute_fram:3,record:[2,3,11],recov:[3,7,11],recoveri:[3,11],rectangular:[1,3],recurr:[3,11],recurs:11,redistribut:7,reduc:[3,11],reduct:[3,11],redund:[3,11],ref:3,ref_channel:11,refer:[0,2,10],reflect:[1,3,11],regen:3,reject:3,rel:[1,3],releas:[2,4],release1:2,release2:2,release3:2,relev:3,relu:[6,8],remain:0,remix:9,remov:3,remove_dc_offset:1,replic:[3,11],report:0,repres:[1,3,7,8,11],represent:[4,6],request:6,requir:[0,9,11],requires_grad:11,resampl:[7,9],resample_frequ:3,resampling_method:[3,11],resblock:6,research:7,reson:0,resourc:[2,4,7],respect:[2,11],respons:11,rest:2,restrict:0,result:[0,2,3,6,7,9,11],retain:[3,11],retriev:7,return_complex:[3,11],reuben:7,reus:3,revers:[3,11],revis:3,rewrit:11,riaa:3,rian:[3,11],ric:[3,11],riedhamm:3,right:[1,3,8],right_context_length:8,riol:[3,11],rms:2,rnn:[3,6,11],robust:11,roceed:[3,11],roll:[3,11],rolloff:[3,11],ron:6,ronan:[6,7],root:2,rosana:7,round:1,round_to_power_of_two:1,row:3,rpdf:3,run:[3,4,9,11],runtim:9,ruom:6,ruslan:[6,7],rxr:2,ryan:6,safe:9,sake:3,salakhutdinov:[6,7],same:[3,7,9,11],sampl:[0,1,2,3,6,7,9,11],sample_frequ:1,sample_r:[0,2,3,6,7,9,10,11],sample_rate_clean:2,sample_rate_noisi:2,sander:6,sanjeev:[3,6,7],satheesh:6,saunder:7,save:[3,7,9,10],scalar:[3,11],scale:[1,3,6,7,8,11],schuster:6,scipi:3,scott:3,scp:5,script:[0,7,9],search:[3,11],search_tim:[3,11],seb:6,second:[1,3,9,11],section:2,see:[0,2,3,4,6,7,8,11],seed:12,segment:[1,8],segment_length:8,select:[2,11],self:[6,7,9,11],seltzer:8,sengupta:6,sentenc:[2,3,6,7],sep:11,separ:[3,6],seq1:3,seq2:3,seq:[3,11],sequenc:[3,6,11],sequenti:11,set:[0,1,3,6,7,10,11,12],set_audio_backend:[0,10],set_buffer_s:12,set_se:12,set_use_thread:12,set_verbos:12,sgd:11,sgdarg:11,shakti:7,shape:[0,1,3,6,7,8,9,11],sharp:[3,11],sharper:[3,11],shelv:3,shen:6,shi:8,shift:[1,3,9,11],shoko:11,shorter:[3,11],should:[1,3,4,6,7,11],shubho:6,shuffl:2,shutdown:4,shutdown_sox_effect:9,side:[3,11],sigmoid:6,sign:0,signal:[0,1,3,6,7,8,11],signific:3,silenc:[3,9,11],silu:8,similar:[1,2,3,9,11],simonyan:6,simpl:[3,11],simulate_first_pass_onlin:3,sinc:0,sinc_interpol:[3,11],sing:3,singl:[0,3,6,9,11],sinusoid:3,size:[0,1,3,6,8,9,11,12],skerrv:6,skip:[0,2],skirt:3,slanei:[3,11],slide:[3,11],slight:9,slow:11,slower:11,slp:2,slt:2,sltu:7,small:[2,3,11],smallest:3,smooth:3,snip:3,snip_edg:[1,3],snippet:[3,11],sofien:11,soft:3,soft_min_f0:3,softmax:6,solut:11,solv:11,some:[2,3,11],sometim:4,souden:11,sound:[2,3,11],soundfil:[4,10],soundfile_backend:0,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12],sourceforg:[0,3,11,12],sox:[3,4,9,11,12],sox_effect:4,sox_io:[0,10],sox_io_backend:[0,3],sox_util:4,soxeffecttensortransform:9,soxeffecttransform:9,soxformat:0,spatial:11,speaker:2,speaker_id:2,spec_f:11,specaug:11,specgram:[3,6,7,11],specgram_mel_db:11,specifi:[0,1,3,11],speckwarg:11,spectral:[3,11],spectral_centroid:11,spectrogram:[6,7],spectrum:[3,11],speech:[0,2,3,4,6,8,11],speech_commands_v0:2,speechcommand:4,speed:[3,9,11],sph:[0,2],sphere:0,split:[3,6,7,11],spot:7,squar:[3,11],src:[0,10],sriram:7,stabil:11,stabl:[4,11],stack:6,stage:4,stand:[6,7],stanford:3,start:[0,3,6,11],state:8,statu:4,std:1,steer:11,step:[3,6,11],stf:11,stft:[3,11],still:[3,11],stimberg:6,stop:[6,11],store:3,str:[0,1,2,3,5,6,7,8,9,10,11,12],strategi:8,stream:[5,8,11],streched_0_9:11,streched_1_2:11,stretch:[3,11],stride:6,string:[0,3,5,7,9,11],structur:4,stv_evd:11,stv_power:11,stype:11,subclass:2,subpackag:[6,7],subset:[2,7],substitut:3,subtract:1,subtract_mean:1,suffici:1,sum:[3,11],sum_:3,sung:11,supervis:[6,7],support:[0,2,3,4,6,7,12],suppos:9,surpass:6,sush:0,svn:2,symbol:[2,6],symbol_embedding_dim:6,synnaev:[6,7],synthesi:6,system:[6,10],tacotron2:4,tacotron2_wavernn_phoneme_ljspeech:7,tacotron2tt:7,tag:4,take:[0,3,7],takuya:11,talk_id:2,tanh:8,tanh_on_mem:8,tar:2,target:[2,3,6,11],target_length:[3,11],target_transform:2,task:6,taslp:6,tasnet:6,teacher:6,tedlium:4,tensor:[0,1,2,3,5,6,7,8,10,11],term:[4,6],test:[0,2,4,6,11],testing_list:2,text:[2,3,4,6,11],textbf:11,textbook:11,than:[0,3,9,11],thei:[2,3,7,11],theory_ideal_bandlimited_interpol:3,therefor:9,thi:[0,1,2,3,4,5,6,7,9,11,12],thing:[3,11],those:[3,11],though:[0,9],three:11,threshold:6,through:[4,6],time:[0,3,4,6,7,9,11],time_mask_param:11,timsainb:11,togeth:11,token:[6,7],token_length:6,tolerance_chang:11,tolerance_loss:11,tomohiro:11,tone:3,top:[2,6],top_db:[3,11],torch:[0,1,2,3,5,6,7,8,9,10,11],torchelast:4,torchscipt:3,torchscript:[0,9],torchserv:4,torchtext:4,torchvis:4,total:1,tpdf:3,trace:11,track:3,train:[2,6,7,8,11],tran:9,transact:[6,11],transcrib:7,transcript:[2,7],transduc:[3,11],transduct:[3,11],transfer:11,transform:[2,3,4,6,7,8,9],transformerencod:6,transpos:6,treat:[3,11],trebl:3,triangular:[1,3,11],trigger:[3,11],trigger_level:[3,11],trigger_tim:[3,11],trim:[3,9,11],trmal:3,truncat:3,trunk:2,tsai:[6,7],tsv:2,tts:[6,7],ttstextprocessor:7,tune:[3,4,6],tupl:[0,2,3,5,6,7,8,9],turn:[1,3,11],twice:[3,11],two:[1,2,3,6,11],txt:2,tyer:7,type:[0,1,2,3,5,6,7,8,9,10,11,12],typic:[3,4],udio:[3,11],uff:[3,11],uint8:0,ulaw:0,unassign:10,und:11,under:7,underli:[0,12],uniform:3,uniformli:[3,11],union:[2,7],unit:[6,7],unk:7,unknown:[0,7],unlabel:7,unsign:0,unsupervis:7,untouch:9,up_vot:2,updat:11,upsampl:[3,6],upsample_filter_width:3,upsample_scal:6,url:[2,6,7,11],url_symbol:2,usag:[7,9,12],use:[0,1,2,3,5,6,7,8,9,10,11,12],use_energi:1,use_log_fbank:1,use_pow:1,use_thread:12,used:[0,2,3,6,7,11,12],useful:[1,3],user:[3,4,11],uses:[3,7,9,11],usic:[3,11],using:[2,3,6,11],usual:[3,11],util:[2,4,9],utter:[3,8,11],utterance_id:2,utterance_numb:2,uvic:2,v_0:3,valid:[0,2,6,7,8,9,12],validation_list:2,valu:[0,2,3,6,7,8,9,11,12],van:6,variabl:[0,3],varianc:[3,11],variou:1,vassil:7,vbr:0,vctk:2,vctk_092:4,vector:[4,6,11],verbos:12,verfahren:11,veri:9,version:[2,3],via:[7,8,9],view_as_r:[3,11],vineel:7,vinyl:3,vocder:7,voic:[3,7,11],voltag:11,volum:[3,7,11],vorbi:0,vtln:1,vtln_high:1,vtln_low:1,vtln_map:1,vtln_warp:1,w2v_encod:6,wai:[1,3,9],wang:[6,8],want:[3,11],warn:[1,12],warp:1,waspaa:[3,11],wav2lett:4,wav2vec2:[4,7],wav2vec2_asr:6,wav2vec2asrbundl:7,wav2vec2bundl:7,wav2vec2forctc:6,wav2vec2model:7,wav2vec:[4,6],wav2vec_smal:6,wav2vec_small_960h:6,wav2vecencod:6,wav:[0,2,3,6,7,9,11],wave:9,wave_form:9,waveform:[1,2,3,6,7,9,11],waveform_clean:2,waveform_noisi:2,waveform_shift:11,wavenet:6,wavernn:[4,7],waves_yesno:2,weber:7,wei:[6,7],weight:[3,6,7,8,11],weight_init_scale_strategi:8,weiss:6,well:0,were:7,what:[1,3],when:[0,2,3,6,9,11,12],where:[0,1,2,3,11],whether:[2,3,6,11],which:[0,2,3,5,6,7,9,11],whole:[0,2,3],wideband:0,width:[3,11],wiki:3,wikipedia:[3,11],william:11,win_length:[3,7,11],window:[0,1,3,11],window_fn:11,window_typ:1,wise:3,within:[0,8],without:[3,11],wkwarg:11,won:3,word:[2,3],work:9,worker:2,workshop:[3,11],world:7,would:[1,3],wrapper:5,write:12,www:[2,3],x_mu:[3,11],xla:4,yang:6,yangyang:8,yao:[6,7],yeh:8,yesno:4,yesno_data:2,yet:[4,9],yongqiang:8,yoshioka:11,you:[0,1,2,7,9,10,11],your:[0,7,11],ython:[3,11],yuxuan:6,zamm:11,zeitschrift:11,zero:[1,3,6,11],zeros_lik:6,zeroth:1,zhang:[6,8,11],zheng:7,zhifeng:6,zhou:[6,7],zip:[2,9],zongheng:6,zoph:11},titles:["torchaudio.backend","torchaudio.compliance.kaldi","torchaudio.datasets","torchaudio.functional","torchaudio","torchaudio.kaldi_io","torchaudio.models","torchaudio.pipelines","torchaudio.prototype.emformer","torchaudio.sox_effects","torchaudio","torchaudio.transforms","torchaudio.utils"],titleterms:{"function":[1,3,6,10],allpass_biquad:3,amplitude_to_db:3,amplitudetodb:11,angl:3,appli:9,apply_codec:3,asr:7,audiometadata:0,avail:0,backend:[0,10],band_biquad:3,bandpass_biquad:3,bandreject_biquad:3,bass_biquad:3,biquad:3,channel:11,cmuarctic:2,cmudict:2,common:0,commonvoic:2,complex:[3,11],complex_norm:3,complexnorm:11,complianc:1,compute_delta:3,compute_kaldi_pitch:3,computedelta:11,contrast:3,convtasnet:6,create_dct:3,create_fb_matrix:3,data:0,dataset:2,db_to_amplitud:3,dcshift:3,deemph_biquad:3,deepspeech:6,detect_pitch_frequ:3,dither:3,dr_vctk:2,edit_dist:3,effect:9,emform:8,equalizer_biquad:3,extract:[3,11],factori:6,fade:11,fbank:1,featur:[3,11],file:9,filter:3,filtfilt:3,fine:7,flanger:3,frequencymask:11,gain:3,griffinlim:[3,11],gtzan:2,highpass_biquad:3,hubert:[6,7],hubert_asr_larg:7,hubert_asr_xlarg:7,hubert_bas:[6,7],hubert_larg:[6,7],hubert_xlarg:[6,7],import_fairseq_model:6,import_huggingface_model:6,info:0,initi:9,inverse_spectrogram:3,inversemelscal:11,inversespectrogram:11,kaldi:1,kaldi_io:5,learn:7,lfcc:11,lfilter:3,librari:4,librispeech:2,libritt:2,linear_fbank:3,list:9,ljspeech:2,load:0,loss:[3,11],lowpass_biquad:3,magphas:3,mask_along_axi:3,mask_along_axis_iid:3,matric:5,melscal:11,melscale_fbank:3,melspectrogram:11,metric:3,mfcc:[1,11],model:6,mu_law_decod:3,mu_law_encod:3,mulawdecod:11,mulawencod:11,multi:11,mvdr:11,overdr:3,overview:0,packag:4,phase_vocod:3,phaser:3,pipelin:7,pitch_shift:3,pitchshift:11,prototyp:8,psd:11,pytorch:4,read_mat_ark:5,read_mat_scp:5,read_vec_flt_ark:5,read_vec_flt_scp:5,read_vec_int_ark:5,refer:[3,4,6,7,8,11],represent:7,resampl:[3,11],resourc:9,riaa_biquad:3,rnnt_loss:3,rnntloss:11,save:0,shutdown:9,sliding_window_cmn:3,slidingwindowcmn:11,soundfil:0,sox:0,sox_effect:9,sox_util:12,spectral_centroid:3,spectralcentroid:11,spectrogram:[1,3,11],speech:7,speechcommand:2,structur:0,support:9,tacotron2:[6,7],tacotron2_griffinlim_char_ljspeech:7,tacotron2_griffinlim_phone_ljspeech:7,tacotron2_wavernn_char_ljspeech:7,tacotron2_wavernn_phone_ljspeech:7,tacotron2ttsbundl:7,tedlium:2,tensor:9,text:7,textprocessor:7,timemask:11,timestretch:11,torchaudio:[0,1,2,3,4,5,6,7,8,9,10,11,12],transform:11,treble_biquad:3,tune:7,util:[3,6,10,11,12],vad:[3,11],vctk_092:2,vector:5,vocod:7,vol:11,wav2lett:6,wav2vec2:6,wav2vec2_asr_base_100h:7,wav2vec2_asr_base_10m:7,wav2vec2_asr_base_960h:7,wav2vec2_asr_large_100h:7,wav2vec2_asr_large_10m:7,wav2vec2_asr_large_960h:7,wav2vec2_asr_large_lv60k_100h:7,wav2vec2_asr_large_lv60k_10m:7,wav2vec2_asr_large_lv60k_960h:7,wav2vec2_bas:[6,7],wav2vec2_larg:[6,7],wav2vec2_large_lv60k:[6,7],wav2vec2_model:6,wav2vec2_xlsr53:7,wav2vec2model:6,wav2vec:7,wavernn:6,yesno:2}})