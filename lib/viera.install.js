const sentences = require('./install/viera.sentences.js');

module.exports = function install(){
    return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
        if(lang[0].language!='fr-FR'){
            return gladys.sentence.insertBatch([sentences.sentenceTvOffEn, sentences.sentenceTvOnEn, sentences.sentenceTvVolumeUpEn, sentences.sentenceTvVolumeDownEn, sentences.sentenceTVMuteEN, sentences.sentenceTVUnmuteEN, sentences.sentenceTvPauseEN, sentences.sentenceTVPlayEN, sentences.sentenceTVForwardEN, sentences.sentenceTVRewindEN, sentences.sentenceTVMenuEN, sentences.sentenceTVDownEN, sentences.sentenceTVUpEN, sentences.sentenceTVLeftEN, sentences.sentenceTVRightEN, sentences.sentenceTVEnterEN, sentences.sentenceTVBackEN, sentences.sentenceTVRecEN, sentences.sentenceTVInfoEN, sentences.sentenceTVAppEN]);
        } else {
            return gladys.sentence.insertBatch([sentences.sentenceTvOffFr, sentences.sentenceTvOnFr, sentences.sentenceTvVolumeUpFr, sentences.sentenceTvVolumeDownFr, sentences.sentenceTVMuteFR, sentences.sentenceTVUnmuteFR, sentences.sentenceTvPauseFR, sentences.sentenceTVPlayFR, sentences.sentenceTVForwardFR, sentences.sentenceTVRewindFR, sentences.sentenceTVMenuFR, sentences.sentenceTVDownFR, sentences.sentenceTVUpFR, sentences.sentenceTVLeftFR, sentences.sentenceTVRightFR, sentences.sentenceTVEnterFR, sentences.sentenceTVBackFR, sentences.sentenceTVRecFR, sentences.sentenceTVInfoFR, sentences.sentenceTVAppFR]);
        }
    });
}